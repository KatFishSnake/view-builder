const {
    resolve
} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: resolve(__dirname, 'app'),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './main.js'
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                'babel-loader',
            ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader?modules',
                'postcss-loader',
            ],
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }, ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: "./index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        open: true,
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: "inline-source-map",
    watch: true,
    watchOptions: {
        ignored: "/node_modules/",
        aggregateTimeout: 500,
        poll: 500,
    },
};

module.exports = config;
