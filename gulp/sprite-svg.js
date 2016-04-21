module.exports = new function () {
    var svgSprite               = require('gulp-svg-sprite');

    var config                  = {
		mode                    : {
			// css                 : {
			// 	dest            : './',
			// 	sprite          : "sprite.svg",
			// 	render: {
			// 		  : {
			// 			dest: '../../' + cfg.src.styles + '/sprites/svg-sprite'
			// 		}
			// 	}
			// },
			symbol: {
				dest: "./",
				sprite: "svg-sprite.svg"
			}
		}
    };
    // var spriter       = new SVGSpriter(config);
    return function () {
        return gulp.src('**/*.svg', {cwd: cfg.src.svg})
            .pipe(svgSprite(config))
            .pipe(gulp.dest(cfg.dest.img));
    };
};