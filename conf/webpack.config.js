let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: './src/js/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './src/css/style.css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};