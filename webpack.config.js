const path = require("path")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const nodeExternals = require('webpack-node-externals')
const Dotenv = require('dotenv-webpack')

module.exports = {
    target: "async-node",
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.node$/,
                loader: "node-loader"
            }
        ]
    },
    entry: "./server.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "build")
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new NodePolyfillPlugin(),
        new Dotenv()
    ],
    externals: [
        nodeExternals()
    ]
}
