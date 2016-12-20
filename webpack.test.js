/**
 * Created by llan on 2016/12/19.
 */
process.env.NODE_ENV = 'test';

var webpack = require('webpack');
var path = require('path');
module.exports = {
	name: 'run test webpack',
	devtool: 'inline-source-map',
	externals: {
		cheerio: 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/addons': true,
		'react/lib/ReactContext': true
	},
	module: {
		loaders: [
			{
				test: /\.jsx|.js$/,
				exclude: /node_modules/,
				include:[
					path.resolve('app/'),
					path.resolve('test/')
				],
				loader: 'babel',
				query: {
					plugins: [
						["inline-replace-variables", {
							"__SERVER__": false
						}]
					]
				}
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}, {
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{test: /\.woff2?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
			{test: /\.ttf$/, loader: 'url?limit=10000&minetype=application/octet-stream'},
			{test: /\.eot$/, loader: 'file'},
			{test: /\.svg$/, loader: 'url?limit=10000&minetype=image/svg+xml'},
			{test: /\.(png|jpg|jpeg|gif)$/i, loader: 'url?limit=10000&name=[name].[ext]'},
			{test: /\.json$/, loader: 'json'},
			{test: /\.html?$/, loader: 'file?name=[name].[ext]'}
		],
		preLoaders: [{
			test: /\.jsx|.js$/,
			include: [path.resolve('app/')],
			loader: 'isparta'
		}]
	}
};
