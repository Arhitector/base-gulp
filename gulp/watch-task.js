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
		gulp.watch([cfg.src.scripts + '/*.' + JS_FORMATS, cfg.src.markups + '/**/*.' + JS_FORMATS], [cfg.jsCompiler, reload]);
	};
};