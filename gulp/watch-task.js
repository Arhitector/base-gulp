module.exports = new function () {
    var autowatch = require('gulp-autowatch');
    reload = require('browser-sync').reload;

    return function () {
        var htmlCompiler = cfg.htmlCompiler;
        // Watch styles files
        gulp.watch(cfg.src.root + '/**/*.' + cfg.cssBuilder, ['style', reload]);
        // Watch html compiler files
        gulp.watch(cfg.src.root + '/**/*.' + htmlCompiler, [htmlCompiler, reload]);
        // js
        // gulp.watch('/(bower|package).json', ['jsInitialize', reload]);
        // gulp.watch([cfg.src.scripts + '/*.js', cfg.src.markups + '/modules/**/*.js'], ['js', reload]);
        // Watch .json files
        // gulp.watch(cfg.src.root + '/**/*.json', [htmlCompiler, reload]);
        //Watch image files
        /*gulp.watch([
            cfg.src.img + '/!*.' + IMAGE_FORMATS,
            cfg.src.tempImg + '/!*.' + IMAGE_FORMATS,
            cfg.src.markups + '/!**!/!**!/images/sprites/!*.' + IMAGE_FORMATS
        ], ['imagemin', reload]);*/
        //Watch sprite files
        // gulp.watch([
        //     cfg.src.sprites + '/**/*.png',
        //     cfg.src.markups + '/**/images/sprite/*.png'
        // ], ['sprite', reload]);
        // Watch image files
        // gulp.watch('src/images/*.{jpg,jpeg,png,gif}', ['imagemin']).on("add", browserSync.reload);
        // gulp.watch('src/images/*.{jpg,jpeg,png,gif}', ['imagemin']).on("change", browserSync.reload);
        // gulp.watch('src/images/*.{jpg,jpeg,png,gif}', ['cleanDest']).on("unlink", browserSync.reload);
    };
};