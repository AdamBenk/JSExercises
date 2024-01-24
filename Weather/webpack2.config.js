import miniCss from "mini-css-extract-plugin";
import browserSyncPlugin from 'browser-sync-webpack-plugin';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATHS = {
    src:  join(__dirname, 'src'),
    img: join(__dirname, 'images'),
    styles: join(__dirname, 'css'),
    dist: join(__dirname, 'dist')
}

export default {
    mode: 'development',
    context: PATHS.src,
    entry: {
        script: [
            "./index.js",
            "../css/styles.scss"
        ]
    },
    output: {
        path: PATHS.dist,
        filename: "[name].min.js",
        hashFunction: "xxhash64"
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                {
                    loader: miniCss.loader,
                    options: {
                        publicPath: '/'
                    }
                },
                'css-loader',
                'sass-loader',
            ]
        },  {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset',   // <-- Assets module - asset
            generator: {  //If emitting file, the file path is
                filename: 'fonts/[name][ext][query]'
            }
        }, {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',  //<-- Assets module - asset/resource
            generator: {
                filename: 'images/[name][ext][query]'
            }
        }]
    },
    plugins: [
        new miniCss({
            filename: "[name].min.css"
        }),
        new browserSyncPlugin({
            host: 'localhost',
            port: 3000,

            files: ['*.html', '*.js', '*.scss', '*.json'], // => files to watch
            server: {
                baseDir: __dirname
            },
        })
    ],
    watch: true
};
