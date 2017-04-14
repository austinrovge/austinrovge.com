var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './js/app.js'
    },
    output: {
        filename: './js/bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
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
            filename: './css/main.css',
            allChunks: true
        })
    ]
};