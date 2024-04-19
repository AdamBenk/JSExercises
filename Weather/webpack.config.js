import miniCss from "mini-css-extract-plugin";
import browserSyncPlugin from 'browser-sync-webpack-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development',
    entry: {
        "index": [
            "./Weather/src/index.js",
            "./Weather/css/styles.scss",
        ],
    },
    output: {
        path: __dirname + "/dist/js/",
        filename: "[name].min.js",
        publicPath: "/dist/js/",
        hashFunction: "xxhash64"
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ], 
        
        /*[{
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
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },]*/
    },
    plugins: [
        new MiniCssExtractPlugin(),
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
