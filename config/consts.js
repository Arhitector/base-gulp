module.exports = new function () {
	global.NODE_ENV = 'dev';
	global.IMAGE_FORMATS = '{png,gif,jpg,jpeg,svg}';
	global.JS_FORMATS = '{js,jsx}';
	global.JS_FORMATS_ARRAY = ['', '.js','.jsx'];
	global.NODE_ENV = NODE_ENV ? NODE_ENV : "dev" ;
	global.JS_DEST_FILE = 'index.js';
	global.CSS_DEST_FILE = 'all.min.css';
};
