module.exports = new function (callback) {
	var webpackStream		= require('webpack-stream'),
		webpack				= webpackStream.webpack;
		named				= require('vinyl-named');
	if (args.env == 'dev') {
		var isDev = true;
	} else {
		var isDev = false;
	}
	var biuldWEbpack = false;
	function done(err, stats) {
		var biuldWEbpack = true;
		if (err) {
			return err;
		};
		// gulplog[stats.hasErorrs() ? 'error' : 'info'](stats.toString({
		// 	colors: true
		// }));
	}
	var options = {
		//- watch
		watch: isDev,
		//- sourcemap
		devtool: args.env == 'dev' ? 'source-map' : null,

		module: {
			loaders: [{
				test: /\.js$/,
				include: [
					__dirname + "/src/scripts",
					__dirname + "/src/markups"
				],
				loader: 'babel?presets[]=es2015'
			}]
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
		return gulp.src(cfg.src.markups + '/*.js')
			.pipe(plumber({
				errorHandler: function (err) {
					console.log(err.plugin);
					console.log(err.message);
					this.emit('end');
				}
			}))
			.pipe(named())
			.pipe(webpackStream(options, null, done))
			.pipe(gulp.dest(cfg.dest.scripts))
			.on('data', function () {
				if(biuldWEbpack && !callback.called) {
					callback.called = true;
					callback();
				}
			});
	};
};