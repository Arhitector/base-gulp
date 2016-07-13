module.exports = new function () {
	// Template variables
	cfg.destTemplate = {
		'pageTitle': 'Page title',
		'root' : '../' + cfg.src.root,
        'isDev': cfg.isDev,
		'cssPath': 'css',
		'imgPath': '../' + cfg.src.img,
		'jsPath': 'js',
		'tempPath': '../' + cfg.src.tempImg,
		'imageSprites': '../' + cfg.src.sprites,
		'blocksPath': '../' + cfg.src.blocks,
		'modulesPath': '../' + cfg.src.modules
	};
}