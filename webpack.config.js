

var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: './dist/scripts.js',
        library: 'clock'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".sass", ".css"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};