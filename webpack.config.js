//usamos webpack y babel
//npm i @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev
const path = require('path');
const htmlWebPackPluging = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new htmlWebPackPluging(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin([{
            from: './src/styles/style.css',
            to: ''
        }])
    ]
}