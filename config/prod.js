module.exports = new function () {
	cfg.isProd = true;
    cfg.destTemplate = {
		'root' : '../' + cfg.dest.root,
		'cssPath': './css',
		'jsPath': cfg.dest.js,
		'imgPath': cfg.dest.img,
		'imageSprites': cfg.dest.img,
		'tempPath': cfg.dest.img,
		'blocksPath': cfg.dest.img,
		'modulePath': cfg.dest.img
    };

	cfg.dest.root = './prod';
	cfg.dest.spritesPath = '../img';
	cfg.dest.sprites = cfg.dest.root + '/img';

	cfg.stylesVariables = {
		get fonts() {
			return '"' + './font' + '"';
		},
		get img() {
			return '"' + cfg.dest.img + '"';
		},
		get imgModules() {
			return '"' + cfg.dest.img + '"';
		},
		get imgBlocks() {
			return '"' + cfg.dest.img + '"';
		},
		get imgSvg () {
			return '"' + cfg.dest.img + '"';
		}
	};
};
