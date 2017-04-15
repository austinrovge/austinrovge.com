let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './app/components/index.js'
    },
    output: {
        filename: './app/components/app.js'
    },
    watch: false,
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
            filename: './app/css/style.css',
            allChunks: true
        })
    ]
};