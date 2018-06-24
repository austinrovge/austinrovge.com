const path = require('path');

module.exports = {
    entry: {
        filename: './src/js/index.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../src/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    }
};