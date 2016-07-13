// common used plugins
require('./config/consts');
global._			= require('lodash');
global.gulp			= require('gulp');
// global.args			= require('yargs').argv;
global.gulpSequence = require('gulp-sequence');
// global.glob         = require('glob');
// global.path         = require('path');
global.fs			= require('fs');
// global.mkdirp       = require('mkdirp');
global.rimraf       = require('gulp-rimraf');
// global.foreach      = require('gulp-foreach');
// global.gulpIf       = require('gulp-if');
// global.noop         = require('gulp-util').noop;
global.notify		= require('gulp-notify');
global.size			= require('gulp-size');
global.plumber		= require('gulp-plumber');
global.rename		= require("gulp-rename");
global.gulpIf		= require('gulp-if');
//config
global.configLoader = require('./config/config-loader');
configLoader.load();

//------------------ TASKS ------------------//
//styles
gulp.task('style', function () {
    return require('./gulp/style-task')();
});
//html
gulp.task('hbs', function () {
    return require('./gulp/hbs-task')();
});
gulp.task('jade', function () {
    return require('./gulp/jade-task')();
});
//html prettify
gulp.task('prettify', function () {
	return require('./gulp/prettify')();
});
//js
gulp.task('webpack', function () {
	return require('./gulp/webpack');
});
gulp.task('js', function () {
	return require('./gulp/js-task')();
});
//new module/block
gulp.task('new', function () {
    return require('./gulp/new-module')();
});
//media
gulp.task('imagemin', function () {
    return require('./gulp/imagemin-task')();
});
gulp.task('sprite', function () {
    return require('./gulp/sprite-task')();
});
gulp.task('svg', function () {
    return require('./gulp/sprite-svg')();
});
//server
gulp.task('connect', function () {
    require('browser-sync')({
        notify: false,
        directory: true,
        open: false,
        port: cfg.serverPort,
        server: {
            baseDir: cfg.dest.root
        }
    });
});
gulp.task('watch', ['connect'], function () {
    return require('./gulp/watch-task')();
});
//common
// gulp.task('cleanCache', function (done) {
//     return cache.clearAll(done);
// });
gulp.task('clean', function () {
    return gulp.src([cfg.dest.root, cfg.src.styles + '/sprites'], {read: false}).pipe(rimraf());
});
gulp.task('cleanAll', function () {
    return gulp.src([
        'bower_components',
        '.sass-cache',
        'temp',
        'test',
        'node_modules',
		'www',
		'prod'
    ], {read: false}).pipe(rimraf());
    gulp.start(['cleanCache', 'cleanDest']);
});
// gulp.task('fonts', function () {
//     gulp.src(cfg.src.fonts)
//         .pipe(gulp.dest(cfg.dest.fonts))
// });

//general
gulp.task('build', gulpSequence(['sprite', cfg.htmlCompiler, cfg.jsCompiler], 'style'));
gulp.task('dev', function () {
    gulp.start('build');
});
gulp.task('prod', function (cb) {
	configLoader.load('prod');
	gulpSequence(['build', 'imagemin'], 'prettify')(cb);
});
gulp.task('default', gulpSequence('build','watch'));