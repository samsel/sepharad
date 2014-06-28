var download = require("download"),
	rimraf = require("rimraf"),
	directory = __dirname + "/tmp",
	Github;

module.exports = Github = function Github(url, branch) {

	this.packageURL = url   
			  		+ '/archive/' 
			  		+ (branch || "master") 
			  		+ '.zip';
};

Github.prototype.load = function(callback) {

	var request = download(this.packageURL, directory, 
					{ 
						extract: true, 
						strip: 1 
					});

	request.on("error", function(err) {
		callback(err);
	});

	request.on("close", function() {
		callback(null, directory);
	});
};

Github.prototype.clean = function() {
	rimraf(directory, function (err) {
		if (err) {
			console.dir(err);
		}
	});
};