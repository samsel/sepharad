var validator = require("./lib/validator"),
	Github = require('./lib/github'),
	report = require('./lib/report'),
	sepharad;

sepharad = module.exports = function sepharad (options) {

	"use strict";

	options = options || {};

	var hasError = validator.validate(options);
	if (hasError) {
		return;	
	}

	var github = new Github(options.url,  options.branch),
		onLoad;

	onLoad = function (err, targetDirectory) {
		if (err) {
			console.dir(err);
			return;
		}
		//modify the path to be absolute to the downloaded dir
		options.path = targetDirectory + "/" + options.path;
		//modify the output path to be absolute to the sepharad root dir
		options.output = __dirname + "/" + options.output;		
		github.clean();
		report.generate(options);		
	};	

	github.load(onLoad);	
};