const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'dev-bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    mode: 'development',
    devServer: {
        open: true,
        port: 8081,
        hot: true,
        writeToDisk: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /node_modules/,
            }
        ]
    }
};

