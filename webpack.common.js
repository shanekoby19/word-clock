const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.s?css$/,
            exclude: /node_modules/,
            use: ["style-loader", "css-loader", "sass-loader"]
        }],
    },
}