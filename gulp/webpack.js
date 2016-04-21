module.exports = new function (callback) {
	var webpackStream		= require('webpack-stream'),
		webpack				= webpackStream.webpack,
		named				= require('vinyl-named');
	var biuldWebpack = false;
	function done(err, stats) {
		var biuldWebpack = true;
		if (err) {
			return console.log(err);
		};
	}
	var options = {
		//- watch
		// watch: cfg.isDev,
		//- sourcemap
		devtool: cfg.isDev ? 'source-map' : null,

		module: {
			loaders: [
				{
					test: /\.js$/,
					include: [
						__dirname + "/src/scripts",
						__dirname + "/src/markups"
					],
					loader: 'babel?presets[]=es2015'
				}
			]
		},

		plugins: [
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				name: "common",
				minChunks: 2
			})
		]
	};
	return function () {
		return gulp.src(cfg.src.markups + '/*.' + JS_FORMATS)
			.pipe(plumber({
				errorHandler: function (err) {
					console.log(err.plugin);
					console.log(err.message);
					this.emit('end');
				}
			}))
			.pipe(named())
			.pipe(webpackStream(options, "", done()))
			.pipe(gulp.dest(cfg.dest.scripts))
			.on('data', function () {
				if(biuldWebpack) {
					callback();
				}
			});
	};
};