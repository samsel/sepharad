var Dependo = require("dependo"),
	fs = require("fs");

module.exports.generate = function (options) {
	 // Fire up an dependo instance	 
	var report = new Dependo(options.path, {}).generateHtml();
	fs.writeFile(options.output, report, function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			console.log("The report output was saved at: " + options.output);
		}
	});
};