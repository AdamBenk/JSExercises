import miniCss from "mini-css-extract-plugin";
import browserSyncPlugin from 'browser-sync-webpack-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



export default {
    mode: 'development',
    entry: {
        "index": [
            "./mixed/scripts/index.js",
            "./mixed/css/styles.scss",
        ],
    },
    output: {
        path: __dirname + "/dist/js/",
        filename: "[name].min.js",
        publicPath: "/dist/js/",
        hashFunction: "xxhash64"
    },
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: [
                {
                    loader: miniCss.loader,
                    options: {
                        publicPath: '/1/'
                    }
                },
                'css-loader',
                'sass-loader',
            ]
        },
                {
                    test: /\.(png|jpg|gif)$/i,
                    dependency: { not: ['url'] },
                    use: [
                        {
                            loader: 'url-loader'
                        },
                    ],
                }
        ],
       
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
                baseDir: [__dirname]
            },
        })
    ],
   
    watch: true
};
