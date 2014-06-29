var sepharad = require("../sepharad");

// test 1
sepharad();

// test 2
sepharad({
	url : "https://github.com/krakenjs/kraken-js",
	path: "lib/",
	format: "wrong",
	output: "report.html"
});

// test 3
sepharad({
	url : "https://github.com/krakenjs/kraken-js",
	path: "lib/",
	format: "cjs",
	exclude: "^node_modules",
	output: "report.html"
});