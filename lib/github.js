var download = require("download"),
	colors = require('colors'),
	rimraf = require("rimraf"),
	directory = __dirname + "/tmp",
	Github;

"use strict";	

module.exports = Github = function Github(url, branch) {

	this.packageURL = url   
			  		+ '/archive/' 
			  		+ (branch || "master") 
			  		+ '.zip';
};

Github.prototype.load = function(callback) {

	console.log(" => Fetching source code from: ".grey + this.packageURL.grey);

	var request = download(this.packageURL, directory, 
					{ 
						extract: true, 
						strip: 1 
					});

	request.on("error", function(err) {
		callback(err);
	});

	request.on("close", function() {
		console.log(" => Fetch complete.".grey);
		callback(null, directory);
	});
};

Github.prototype.clean = function() {
	rimraf(directory, function (err) {
		if (err) {
			console.dir(err);
		}
		console.log(" => Cleaned up the fetched source code.".grey);
	});
};