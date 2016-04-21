module.exports = new function () {
	cfg.isProd = true;

	cfg.dest.root = './prod';
    cfg.destTemplate = {
        'root' : '../' + cfg.src.root,
        'isDev': false,
        'pageTitle': 'arhitector',
        'cssPath': 'css',
        'imgPath': './img',
        'jsPath': 'js',
        'tempPath': './img/temp',
        'blocksPath': './img',
        'modulePath': './img'
    };
};
