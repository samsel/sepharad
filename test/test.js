var sepharad = require("../sepharad");

// test 1
sepharad();

// test 2
var example = {
	url : "https://github.com/krakenjs/kraken-js",
	path: "lib/",
	output: "report.html"
};
sepharad(example);