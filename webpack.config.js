const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const plugins = [];

if (NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  );
}

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'numberFormatter',
    libraryTarget: 'umd',
  },
  module: {
	  rules: [
	  	{
	  		test: /\.js$/,
	  		exclude: /node_modules/,
		  	use: [
		  		{
		  			loader: 'babel-loader',
		  		},
		  	],
		  },
	  ],
	},
	devtool: NODE_ENV === 'development' ? 'cheap-inline-source-map' : false,
	watch: NODE_ENV === 'development',
  plugins: plugins,
	resolve: {
		extensions: ['.js'],
		modules: [
    	path.join(__dirname, 'src'),
     	'node_modules',
  	],
	},
};
