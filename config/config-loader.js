module.exports = new function () {
	return {
		load: function () {
			// if (!env || typeof env !== 'string') {
			// 	throw new Error('Wrong environment argument');
			// }
			// if (!fs.existsSync('config/' + env + '.js')) {
			// 	throw new Error('Environment "' + env + '" is not exists');
			// }
			global.cfg = require('../config/config');
			require('../config/config-paths');
			// require('../config/config-logging');
			require('../config/config-templates');
			require('../config/config-styles');
			// require('../config/config-scripts');
			require('../config/' + NODE_ENV);
		}
	};
};