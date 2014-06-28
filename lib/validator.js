var schema = require("validate"),
    util = require('util'),
    colors = require('colors'),
    errorString = "Error - ",
    options;

options = schema({
    url: {
        type: 'string',
        required: true,
        match: /(http|https)+/,
        message: errorString + 'Enter a valid Github URL'
    },
    branch: {
        type: 'string',
        message: errorString + 'Enter a valid branch'
    },
    path: {
        type: 'string',
        required: true,
        message: errorString + 'Enter a valid source path'
    },     
    output: {
        type: 'string',
        required: true,
        message: errorString + 'Enter a valid output file'
    }    
});

module.exports.validate = function (obj) {
    return options.validate(obj);   
}

module.exports.printErrors = function (errors) {
    errors.forEach(function (error) {
        util.print("=>  \t".grey + error.red + "\n");
    });
}