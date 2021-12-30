const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "index.js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    }
});