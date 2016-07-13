
var webpackStream		= require('webpack-stream'),
	webpack				= webpackStream.webpack,
	gulpUtil 			= require('gulp-util'),
	named				= require('vinyl-named'),
	reload 				= require('browser-sync').reload;
var options = {
	// context: "./src/markups",
	entry: {
		common: './' + cfg.src.scripts + '/common',
		index: './' + cfg.src.markups + '/home'
	},
	output: {
		path: "./" + cfg.dest.scripts,
		filename: "[name].js",
		// publickPath: '/js/',
		library: "[name]"
	},
	devtool: cfg.isDev ? 'cheap-inline-module-sourcemap' : null,
	resolve: {
		modulesDirectories: ['node_modules', cfg.src.scripts],
		extensions: JS_FORMATS_ARRAY
	},
	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: JS_FORMATS_ARRAY
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				include: [
					/(src\/markups)/,
					/(src\/scripts)/
				],
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react'],
					plugins: [
						'transform-runtime',
						'transform-decorators-legacy'
					]
				}
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
gulp.task('webpack', function (callback) {
	return webpack(options, function(err, stats) {
		if (err) throw new gulpUtil.PluginError('webpack', err);
		callback();
	})
		.watch({
			aggregateTimeout: 100
		}, function(err, stats) {
			if (err) throw new gulpUtil.PluginError('webpack', err);

			gulpUtil.log('[webpack]', stats.toString());

			reload();
		});
});
// function done(err, stats) {
// 	var biuldWebpack = true;
// 	if (err) {
// 		return console.log(err);
// 	};
// 	// gulpUtil[stats.hasErrors() ? 'error' : 'info'](stats.toString({
// 	// 	colors: true
// 	// }));
// 	gulpUtil.log('[webpack]', stats.toString());
// }
// function done(err, stats) {
// 	if (err) throw new gulpUtil.PluginError('webpack', err);
//
// 	gulpUtil.log('[webpack]', stats.toString());
//
// 	reload();
// };
// var options = {
// 	//- watch
// 	watch: cfg.isDev,
// 	//- sourcemap
// 	devtool: cfg.isDev ? 'cheap-inline-module-sourcemap' : null,
// 	resolve: {
// 		root: "./" + cfg.src.markups,
// 		extensions: JS_FORMATS_ARRAY
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.jsx/,
// 				include: [
// 					/(src\/markups)/,
// 					/(src\/scripts)/
// 				],
// 				loader: 'babel',
// 				query: {
// 					presets: ['es2015', 'stage-0', 'react'],
// 					plugins: [
// 						'transform-runtime',
// 						'transform-decorators-legacy'
// 					]
// 				}
// 			}
// 		]
// 	},
//
// 	plugins: [
// 		new webpack.NoErrorsPlugin(),
// 		new webpack.optimize.CommonsChunkPlugin({
// 			name: "common",
// 			minChunks: 2
// 		})
// 	]
// };
// gulp.task('webpack', function () {
// 	return gulp.src(cfg.src.markups + '/*.' + JS_FORMATS)
// 		.pipe(plumber({
// 			errorHandler: function (err) {
// 				console.log(err.plugin);
// 				console.log(err.message);
// 				this.emit('end');
// 			}
// 		}))
// 		.pipe(named())
// 		.pipe(webpackStream(options, "", done()))
// 		.pipe(gulp.dest(cfg.dest.scripts))
// 		.on('data', function () {
// 			if(biuldWebpack) {
// 				callback();
// 			}
// 		});
// });