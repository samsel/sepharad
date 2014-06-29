var util = require('util'),
	colors = require('colors');


module.exports.print = function () {

	"use strict";

	util.print("\n");
	util.print("|--------------------------------------------------------|\n".green);
	util.print("|                     USAGE                              |\n".green);
	util.print("|--------------------------------------------------------|\n".green);
	util.print("|                                                        |\n".green);
	util.print("    sepharad({                                          \n".magenta);
	util.print('    \t "url"     : "https://github.com/krakenjs/kraken-js", \n'.magenta);
	util.print('    \t "branch"  : "master",'.magenta);
	util.print(' (optional)\n'.grey);
	util.print('    \t "path"    : "lib/",                                 \n'.magenta);
	util.print('    \t "format"  : "(amd or cjs)",                       \n'.magenta);
	util.print('    \t "exclude" : "^node_modules",'.magenta);
	util.print(' (optional)\n'.grey);		
	util.print('    \t "output"  : "report.html"                         \n'.magenta);
	util.print("    });                                                 \n".magenta);
	util.print("|                                                        |\n".green);
	util.print("|--------------------------------------------------------|\n".green);
	
};