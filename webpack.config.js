module.exports = {
    devtool: 'inline-source-map',
    entry: './src/JS/index.js',
    output: {
        filename: './dist/js/bundle.js',
        sourceMapFilename: './dist/js/bundle.js.map'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        }]
    }
};
