module.exports = {
    devtool: 'inline-source-map',
    entry: './resources/js/index.js',
    output: {
        filename: './public/js/bundle.js',
        sourceMapFilename: './public/js/bundle.js.map'
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
