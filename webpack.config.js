const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
  },
  module: {
	  rules: [
	  	{
	  		test: /\.js$/,
	  		exclude: /node_modules/,
		  	use: [
		  		{
		  			loader: 'babel-loader',
		  			options: {
		  				presets: ["es2015", "stage-3"]
		  			}
		  		},
		  	],
		  },
	  ],
	},
	devtool: NODE_ENV === 'development' ? 'cheap-inline-source-map' : null,
	watch: NODE_ENV === 'development',
	resolve: {
		extensions: ['.js'],
		modules: [
    	path.join(__dirname, 'src'),
     	'node_modules',
  	],
	},
};
