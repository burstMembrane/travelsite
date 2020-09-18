const currentTask = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// shared config between build and dev tasks
let config = {
    // set entry point (index) for webpack
    entry: './app/assets/scripts/App.js',
    // set output to custom path
    module: {
        rules: [{
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};

if (currentTask == 'dev') {
    config.output = {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app'),
    };
    config.devServer = {
        before: (app, server) => {
            server._watch('./app/**/*.html');
        },
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        stats: 'errors-only',
    };
    // set to development
    config.mode = 'development';
}

if (currentTask == 'build') {
    config.output = {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
    };
    config.mode = 'production';
    config.optimization = {
        splitChunks: {
            chunks: 'all',
        },
    };
    config.plugins = [new CleanWebpackPlugin()];
}

module.exports = config;