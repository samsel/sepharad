var validator = require("./lib/validator"),
	example = require("./lib/example"),
	Github = require('./lib/github'),
	report = require('./lib/report');

var sepharad = module.exports = function sepharad (options) {

	options = options || {};

	var errors = validator.validate(options);
	if (errors.length) {
		validator.printErrors(errors);
		example.print();
		
		return;
	}

	var github,
		self = this;

	github = new Github(options.url,  options.branch);

	github.load(function (err, targetDirectory) {
		if (err) {
			console.dir(err);
			return;
		}
		//modify the path to be absolute to the downloaded dir
		options.path = targetDirectory + "/" + options.path;
		github.clean();
		report.generate(options);
	});	
};