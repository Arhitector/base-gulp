module.exports =  {
	compare: function (item1, item2) {
		var result = "";
		if(item1 < item2) {
			result = item2;
		} else {
			result = item1;
		}
		return result;
	},
	extend: function () {
		return 1234;
	}
};