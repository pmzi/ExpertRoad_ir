const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'production',
    entry: './resources/js/index.js',
    output: {
        filename: '../public/js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: { presets: ['es2015', 'react'] }
        }]
    },
	optimization: {
		minimizer: [new UglifyJsPlugin()]
	}
};
