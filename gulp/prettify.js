module.exports = new function () {
    var prettify        = require('gulp-prettify'),
        minifyHTML      = require('gulp-minify-html');

    return function () {
        var minifyOptions = {
            conditionals: true
        };
        var prettifyOptions = {
            indent_size: 4
        };

        return gulp.src(cfg.dest.html + '/*.html')
            .pipe(minifyHTML(minifyOptions))
            .pipe(prettify(prettifyOptions))
            .pipe(gulp.dest(cfg.dest.html))
    };
};