module.exports = new function () {
	var sass = require('gulp-sass'),
		less = require('gulp-less'),
		inject = require('gulp-inject'),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		postcssShort = require('postcss-short'),
		// sprites = require('postcss-sprites').default;
		postcss = require('gulp-postcss'),
		cssnext = require('postcss-cssnext'),
		csso = require('gulp-csso'),
		gulpIf = require('gulp-if'),
		base64 = require('gulp-base64-inline');

	return function () {
		// var postcssSpriteOpts = {
		// 		basePath: cfg.src.sprites,
		// 		stylesheetPath: cfg.dest.css,
		// 		spritePath: cfg.dest.sprites,
		// 		groupBy: function(image) {
		// 			if (image.url.indexOf('main') !== -1) {
		//
		// 				return Promise.resolve('main');
		// 			}
		// 			return Promise.reject();
		// 		}
		// 	};
		return gulp.src(cfg.src.styles + "/all." + cfg.cssBuilder)
			.pipe(gulpIf(NODE_ENV == 'dev', sourcemaps.init()))
			.pipe(inject(gulp.src([
				cfg.src.styles + '/_config_' + NODE_ENV + '.' + cfg.cssBuilder,
				cfg.src.styles + '/helpers/*.' + cfg.cssBuilder,
				cfg.src.styles + '/**/*.' + cfg.cssBuilder,
				cfg.src.markups + '/**/*.' + cfg.cssBuilder
			], {read: false}), {
				starttag: '/* inject:imports */',
				endtag: '/* endinject */',
				transform: function (filepath) {
					return '@import ".' + filepath + '";';
				}
			}))
			.pipe(
				gulpIf(cfg.cssBuilder == 'less', less(), sass())).on('error', notify.onError(function (error) {
				return "Error on: " + error.filename + " in " + error.line + ' line';
			}))
			.pipe(base64('../../' + cfg.src.dataUri))
			.pipe(autoprefixer({browsers: [cfg.autoprefixerBrowserSupport], cascade: true}))
			.pipe(postcss([
				postcssShort,
				cssnext()
				//https://github.com/2createStudio/postcss-sprites#spritepath
				// sprites(postcssSpriteOpts),

			]))
			.pipe(csso({
				restructure: true
			}))
			.pipe(gulpIf(NODE_ENV == 'dev', sourcemaps.write()))
			.pipe(rename(cfg.minifiedCssFilename))
			.pipe(size({showFiles: true}))
			.pipe(gulp.dest(cfg.dest.css));
	};
};