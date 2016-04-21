module.exports = new function () {
	return {
		load: function () {
			global.cfg = require('../config/config');
			require('../config/config-paths');
			require('../config/config-templates');
			require('../config/config-styles');
			require('../config/' + NODE_ENV);
		}
	};
};