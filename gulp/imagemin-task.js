module.exports = new function () {
	var imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		changed = require('gulp-changed');

	return function () {
		return gulp.src([
				cfg.src.img + '/**/*.' + IMAGE_FORMATS,
				cfg.src.blocks + '/**/images/*.' + IMAGE_FORMATS,
				cfg.src.modules + '/**/images/*.' + IMAGE_FORMATS,
				'!' + cfg.src.dataUri + '/*.' + IMAGE_FORMATS,
				'!' + cfg.src.sprites + '/**/*.' + IMAGE_FORMATS,
				'!' + cfg.src.svg + '/**/*.' + IMAGE_FORMATS
			])
			.pipe(changed(cfg.dest.img))
			.pipe(imagemin({
				optimizationLevel: 1,
				progressive: true,
				interlaced: true,
				multipass: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()]
			}))
			.pipe(gulp.dest(cfg.dest.img));
	};
};