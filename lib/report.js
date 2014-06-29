var Dependo = require("dependo"),
	colors = require('colors'),
	fs = require("fs");

module.exports.generate = function (options) {

	"use strict";

	// Fire up an dependo instance	 
	console.log(" => Generating dependenices..".grey);

	var report = new Dependo(options.path, {
		format: options.format,
		exclude: options.exclude
	}).generateHtml();
	fs.writeFile(options.output, report, function(err) {
		if(err) {
			console.log(err);
		} 
		else {
			console.log(" => The report output was saved at: ".underline.grey + options.output.green + "\n");
		}
	});
};