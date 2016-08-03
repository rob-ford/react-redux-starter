module.exports = {
	entry: './src/main.jsx',
	output: {
		path: './dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		inline: true,
		port: 3333,
		contentBase: './dist'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		}],
		preLoaders: [{
			test: /\.jsx$/,
			exclude: /(node_modules|bower_components)/,
			loader: "eslint-loader"
		}]
	},
	externals: {
		'react/addons': true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	}
}
