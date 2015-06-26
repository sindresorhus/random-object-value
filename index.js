'use strict';
module.exports = function (obj) {
	var keys = Object.keys(obj);
	return obj[keys[Math.floor(Math.random() * keys.length)]];
};
