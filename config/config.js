module.exports = new function () {
	// CSS compiler: less, sass, scss
	this.cssBuilder		= 'scss';
	// HTML compiler: hbs, Jade
	this.htmlCompiler	= 'hbs';
	// JS compiler : webpack, js , ?(browserify)?
	this.jsCompiler	= 'webpack';
	// Server port
	this.serverPort		= 8008;
};
