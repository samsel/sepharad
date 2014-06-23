module.exports.print = function () {

	var example;

	example = {
		url: "https://github.com/krakenjs/kraken-js",
		branch: "master",
		path: "lib/",
		output: "report.html"
	};

	console.dir("");
	console.dir("Usage:");
	console.dir("");
	console.dir("sepharad(");
	console.dir(JSON.stringify(example));
	console.dir(");");
};