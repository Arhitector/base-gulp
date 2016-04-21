module.exports = new function () {
	// CSS compiler: less, sass, scss
	this.cssBuilder		= 'sass';
	// HTML compiler (Handlebars is default): hbs, Jade
	this.htmlCompiler	= 'jade';
	// JS compiler : webpack, js , browserify
	this.jsCompiler	= 'webpack';
	// Server port
	this.serverPort		= 8008;
};
