const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    devtool:  "cheap-module-source-map",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                })
            }
        ]
    },
    devServer: {
        port: 3001
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
