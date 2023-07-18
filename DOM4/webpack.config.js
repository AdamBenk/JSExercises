const miniCss = require("mini-css-extract-plugin");
const browserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        "index": [
            "./DOM4/javascript/DOM4OOP.js",
            "./DOM4/css/styles.scss",
        ],
        "admin": [
            "./DOM4/javascript/adminOOP.js",
            "./DOM4/css/admin.scss",
        ]

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
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/fonts/',
                        publicPath: '/dist/js/css'
                    }
                }]
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
                baseDir: [__dirname]
            },
        })
    ],
    watch: true
};
