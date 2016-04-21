module.exports = new function () {
	// source
	cfg.src = {
		root: 'src',
		nodeModules: './node_modules',
		bowerComponents: './bower_components',
		get img() {
			return this.root + '/images';
		},
        get svg() {
            return this.img + '/svg';
        },
		get sprites() {
			return this.img + '/sprites';
		},
		get tempImg() {
			return this.img + '/temp';
		},
		get dataUri() {
			return this.img + '/data-uri';
		},
		get styles() {
			return this.root + '/styles';
		},
		get scripts() {
			return this.root + '/scripts';
		},
		get fonts() {
			return this.root + '/fonts';
		},
		get vendor() {
			return this.root + '/vendor';
		},
		get markups() {
			return this.root + '/markups';
		},
		get modules() {
			return this.markups + '/modules';
		},
		get blocks() {
			return this.markups + '/blocks';
		},
		get components() {
			return this.markups + '/components';
		}
	};
	// destination
	cfg.dest = {
		root: 'www',
		get html() {
			return this.root + '/';
		},
		get img() {
			return this.root + '/img';
		},
		get sprites() {
			return this.root + '/img';
		},
		get css() {
			return this.root + '/css';
		},
		get scripts() {
			return this.root + '/js';
		},
		get fonts() {
			return this.root + '/fonts';
		},
		get temp() {
			return this.root + '/temp';
		}
	};
};