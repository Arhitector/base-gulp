module.exports = new function () {
    var handlebars = require('handlebars'),
        hb = require('gulp-hb');
        
	return function () {
		hbsHelpers = require('./lib/hbs-helpers');
        return gulp.src(cfg.src.markups + '/*.hbs')
		.pipe(plumber({
			errorHandler: function (err) {
				console.log(err.plugin);
				console.log(err.message);
				this.emit('end');
			}
		}))
        .pipe(hb({})
            .partials(cfg.src.markups + '/**/*.hbs')
            .helpers(hbsHelpers)
            .data(cfg.destTemplate)
			.data(cfg.src.markups + '/**/*.json')
        )
        .pipe(rename({extname: ".html"}))
		.pipe(gulp.dest(cfg.dest.html));
	};
};