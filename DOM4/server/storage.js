import sqlite3 from 'sqlite3';

const emptyFn = () => { };
export class Storage {
    #context = "undefined";
    #db;

    constructor(context) {
        this.#context = context;
        const filename = `./${this.#convertToFilename(this.#context)}`;

        console.info(`Storage: connecting to ${filename}, context: ${this.#context}`);

        sqlite3.verbose();
        this.#db = new sqlite3.Database("books.db", sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                console.error(err.message);
                process.exit(1);
            } else {
                console.info(`Connected to the ${this.#context} database.`);
            }
        });
    }

    #convertToFilename(context) {
        return context.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    }

    getAll(cb = emptyFn) {
        this.#db.get("SELECT * FROM books", cb);
    }

    getList(offset, limit, cb = emptyFn) {
        this.#db.get("SELECT * FROM books LIMIT ? OFFSET ?", [limit, offset], cb);
    }

    getBy(field, value, cb = emptyFn) {
        this.#db.get(`SELECT * FROM books WHERE ${field} = ?`, [value], cb);
    }

    create(context, data, cb = emptyFn) {
        const fieldNames = Object.keys(data).join(",");
        const fieldQuestionMarks = Object.keys(data).map(() => "?").join(",");
        const values = data.values();

        this.#db.run(`INSERT INTO ${context} (${fieldNames}) VALUES (${fieldQuestionMarks})`, values, cb);

    }

    update(context, id, data, cb = emptyFn) {
        const fieldNames = Object.keys(data).join(",");
        const fieldQuestionMarks = Object.keys(data).map(() => "?").join(",");
        const values = data.values();

        this.#db.run(`UPDATE ${context} SET (${fieldNames}) VALUES (${fieldQuestionMarks}) WHERE id = ?`, values, cb);
    }

    delete(context, id,cb = emptyFn) {
        this.#db.run(`DELETE FROM ${context} WHERE id = ?`, [id], cb);
    }
}