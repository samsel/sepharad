var Dependo = require("dependo"),
	colors = require('colors'),
	fs = require("fs");

module.exports.generate = function (options) {
	 // Fire up an dependo instance	 
	var report = new Dependo(options.path, {
		format: options.format
	}).generateHtml();
	fs.writeFile(options.output, report, function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			console.log("\n" + " The report output was saved at: ".underline + options.output.green + "\n");
		}
	});
};