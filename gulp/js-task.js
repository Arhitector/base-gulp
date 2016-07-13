module.exports = new function () {
	var uglify = require('gulp-uglify'),
		jshint = require('gulp-jshint'),
		// inject = require('gulp-inject'),
		babel = require('gulp-babel'),
		concat = require('gulp-concat'),
		sourcemaps = require('gulp-sourcemaps');
	function getAllJs () {
		return gulp.src(cfg.src.markups + '/**/*.' + JS_FORMATS)
			.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(jshint())
			.pipe(uglify())
			.pipe(concat('index.js'))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(cfg.dest.scripts))
	}
	function jsTaskCompiller () {
		return gulp.src(cfg.src.scripts + '/common.' + JS_FORMATS)
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(jshint())
			.pipe(uglify())
			.pipe(gulp.dest(cfg.dest.scripts))
	}
	return function () {
		jsTaskCompiller();
		getAllJs();
	};
};