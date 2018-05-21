
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: ['env']
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			  },
			  {
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
				  limit: 10000
				}
			  }
		]
	},

	optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: {
                    enforce: true,
                    priority: 1
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 2,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },

	plugins: [
		new UglifyJSPlugin({sourceMap: true}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
		  })
	],

	entry: {
		vendor: ['jquery'],
		app: './src/app.js'
	},

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},

	mode: 'production'
};
