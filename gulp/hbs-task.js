module.exports = new function () {
    var handlebars = require('handlebars');

        // hbs         = require('gulp-hbs'),
        var hb = require('gulp-hb');

        rename = require("gulp-rename");
	return function () {
        // var gulpHandlebars = require('gulp-compile-handlebars');
        // var options = {
        //         partialsDirectory : [cfg.src.modules, cfg.src.blocks]
        //     };
        //
        return gulp.src(cfg.src.markups + '/*.hbs')
        // .pipe(gulpHandlebars({firstName: 'Kaanon'}, options))
        .pipe(hb({})
            .partials(cfg.src.markups + '/**/*.hbs')
            .helpers({
                foo: function () { return 4; },
                bar: function () { return 2345; }
            })
            .data({
                cssPath: cfg.destTemplate.cssPath,
                imgPath: cfg.destTemplate.imgPath,
                tempPath: cfg.destTemplate.tempPath,
                imageSprites: cfg.destTemplate.imageSprites,
                blocksPath: cfg.destTemplate.blocksPath,
                modulesPath: cfg.destTemplate.modulePath
            })
        )
        // .pipe(hb({
        //     helpers: './src/blocks/**/*.hbs',
        //     data: './src/modules/**/*.hbs'
        // }))
        .pipe(rename({extname: ".html"}))
		.pipe(gulp.dest(cfg.dest.html))
	};
};