var validate = require("./lib/validate"),
	example = require("./lib/example");

var sepharad = module.exports = function sepharad (options) {

	options = options || {};

	var errors = validate(options);

	if (errors.length) {
		errors.forEach(console["dir"]);
		example.print();
		
		return;
	}
};