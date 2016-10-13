'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'src/main.ts')
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts?configFileName=jsconfig.json'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};