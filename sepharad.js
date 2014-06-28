var validator = require("./lib/validator"),
	example = require("./lib/example");

var sepharad = module.exports = function sepharad (options) {

	options = options || {};

	var errors = validator.validate(options);
	if (errors.length) {
		validator.printErrors(errors);
		example.print();
		
		return;
	}
};