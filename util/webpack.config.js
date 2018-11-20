const path = require('path');

module.exports = {
    entry: {
        filename: './src/client/js/index.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../src/client/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};