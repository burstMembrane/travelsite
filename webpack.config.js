const path = require("path");

module.exports = {
    // set entry point (index) for webpack
    entry: "./app/assets/scripts/App.js",
    // set output to custom path
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    },
    devServer: {
        before: (app, server) => {
            server._watch("./app/**/*.html");
        },
        host: "0.0.0.0",
        contentBase: path.join(__dirname, "app"),
        hot: true,
        port: 3000,
        stats: "errors-only",
    },
    // set to development
    mode: "development",
    // update on file change
    module: {
        rules: [{
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};