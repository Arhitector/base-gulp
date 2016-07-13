module.exports = new function () {
	cfg.minifiedCssFilename = 'all.min.css';
	cfg.autoprefixerBrowserSupport	= 'last 2 versions';
	// style variables overrides
	cfg.stylesVariables = {
		get fonts() {
			return '"../' + cfg.src.fonts +'"';
		},
		get img() {
			return '"../' + cfg.src.img +'"';
		},
		get imgModules() {
			return '"../' + cfg.src.modules +'"';
		},
		get imgBlocks() {
			return '"../' + cfg.src.blocks +'"';
		},
		get imgDataUri() {
			return '"../' + cfg.src.dataUri +'"';
		},
		get imgSvg () {
			return '"../' + cfg.src.svg +'"';
		}
	};
};
