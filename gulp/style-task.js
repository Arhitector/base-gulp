module.exports = new function () {
	var sass = require('gulp-sass'),
		sassGlob = require('gulp-sass-glob'),
		objSassInline = require('gulp-obj-sass-inline'),
		less = require('gulp-less'),
		lessImport = require('less-plugin-glob'),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		postcssShort = require('postcss-short'),
		// sprites = require('postcss-sprites').default;
		postcss = require('gulp-postcss'),
		cssnext = require('postcss-cssnext'),
		assets  = require('postcss-assets'),
		csso = require('gulp-csso');


	var optionsAssets = {
		basePath: cfg.src.root,
		cachebuster: true,
		// relative: true,
		// loadPaths: [cfg.src.img, cfg.src.tempImg, cfg.src.dataUri]
	};
	var postcssPlugins = [
		postcssShort,
		cssnext(),
		assets(optionsAssets)
		//https://github.com/2createStudio/postcss-sprites#spritepath
		// sprites(postcssSpriteOpts),
	];
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
		// };

		return gulp.src(cfg.src.styles + "/all." + cfg.cssBuilder)
			//start sourcemap
			.pipe(gulpIf(NODE_ENV === 'dev', sourcemaps.init()))
			//sass compiller
			.pipe(gulpIf(cfg.cssBuilder === 'sass' || cfg.cssBuilder === 'scss', objSassInline({
				obj: cfg.stylesVariables
			})))
			.pipe(gulpIf(cfg.cssBuilder === 'sass' || cfg.cssBuilder === 'scss', sassGlob()))
			.pipe(gulpIf(cfg.cssBuilder === 'sass' || cfg.cssBuilder === 'scss', sass()))
			//less compiller
			.pipe(gulpIf(cfg.cssBuilder === 'less', less({
				plugins: [lessImport],
				modifyVars: {
					'@font'			: cfg.stylesVariables.fonts,
					'@img'			: cfg.stylesVariables.img,
					'@imgModules'	: cfg.stylesVariables.imgModules,
					'@imgBlocks'	: cfg.stylesVariables.imgBlocks,
					'@imgSvg'		: cfg.stylesVariables.imgSvg
				}
			})))
			.pipe(plumber({
				errorHandler: function (err) {
					console.log(err.plugin);
					console.log(err.message);
					this.emit('end');
				}
			}))
			.pipe(autoprefixer({browsers: [cfg.autoprefixerBrowserSupport], cascade: true}))
			.pipe(postcss(postcssPlugins))
			.pipe(gulpIf(NODE_ENV !== 'dev', csso({restructure: true})))
			//end sourcemap
			.pipe(gulpIf(NODE_ENV == 'dev', sourcemaps.write()))
			.pipe(rename(cfg.minifiedCssFilename))
			.pipe(size({showFiles: true}))
			.pipe(gulp.dest(cfg.dest.css));
	};
};