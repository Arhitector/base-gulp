module.exports =  {
	compare: function (item1, item2) {
		var result = "";
		if(item1 < item2) {
			result = item2;
		} else if (item1 > item2) {
			result = item1;
		}
		return result;
	}
};