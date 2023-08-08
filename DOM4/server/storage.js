import sqlite3 from 'sqlite3';

const emptyFn = () => { };
export class Storage {
    #context = "undefined";
    #db;
    #filename;

    constructor(context = "undefined", definitions = {}, cb = emptyFn) {
        this.#context = context;
        const filename = `./${this.#convertToFilename(this.#context)}.db`;

        console.info(`Storage: connecting to ${filename}, context: ${this.#context}`);

        sqlite3.verbose();
        this.#db = new sqlite3.Database(filename, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
                if (err) {
                    console.error(err.message);
                    process.exit(1);
                } else {
                    console.info(`Connected to the ${this.#context} database.`);
                    this.#createTable(definitions, cb);
                }
            }
        );
    }

    #convertToFilename(context) {
        return context.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    }

    #createTable(defs, cb = emptyFn) {
        const defStr = Object.keys(defs).map(key=>`${key} ${defs[key]}`).join(", ");
        const query = `CREATE TABLE IF NOT EXISTS ${this.#context} (${defStr})`;

        this.#db.run(query, cb);
    }

    getAll(cb = emptyFn) {
        this.#db.all("SELECT * FROM books", cb);
    }

    getList(offset, limit, cb = emptyFn) {
        this.#db.get("SELECT * FROM books LIMIT ? OFFSET ?", [limit, offset], cb);
    }

    getBy(field, value, cb = emptyFn) {
        this.#db.get(`SELECT * FROM books WHERE ${field} = ?`, [value], cb);
    }

    create(data, cb = emptyFn) {
        const fieldNames = Object.keys(data).join(",");
        const fieldQuestionMarks = Object.keys(data).map(() => "?").join(",");
        const values = Object.values(data)

        this.#db.run(`INSERT INTO ${this.#context} (${fieldNames}) VALUES (${fieldQuestionMarks})`, values, cb);

    }

    update(id, data, cb = emptyFn) {
        const fieldNames = Object.keys(data).join(",");
        const fieldQuestionMarks = Object.keys(data).map(() => "?").join(",");
        const values = data.values();

        this.#db.run(`UPDATE ${this.#context} SET (${fieldNames}) VALUES (${fieldQuestionMarks}) WHERE id = ?`, values, cb);
    }

    delete(id,cb = emptyFn) {
        this.#db.run(`DELETE FROM ${this.#context} WHERE id = ?`, [id], cb);
    }
}