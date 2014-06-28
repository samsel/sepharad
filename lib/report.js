var Dependo = require("dependo");

module.exports.generate = function (options) {
	 // Fire up an dependo instance
	var dependo = new Dependo(options.path, {});
	console.log(dependo.generateHtml());
};