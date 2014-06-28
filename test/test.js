var sepharad = require("../sepharad");

// test 1
sepharad();

// test 2
sepharad({
	url : "https://github.com/krakenjs/kraken-js",
	path: "lib/",
	output: "report.html"
});

// test 3
sepharad({
	url : "https://github.com/krakenjs/kraken-js",
	path: "lib/",
	format: "cjs",
	output: "report.html"
});