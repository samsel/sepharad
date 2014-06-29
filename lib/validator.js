var schema = require("validate"),
    example = require("./example"),
    util = require('util'),
    colors = require('colors'),
    errorString = "Error - ",
    printErrors,
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
    exclude: {
        type: 'string',
        message: errorString + 'Enter a valid exclude path'
    },         
    format: {
        type: 'string',
        required: true,
        match: /(cjs|amd)/,
        message: errorString + "Enter a valid module type. (cjs or amd) \n\t\t cjs = CommonJS \n\t\t amd = Asynchronous Module Definition"
    },     
    output: {
        type: 'string',
        required: true,
        message: errorString + 'Enter a valid output file'
    }    
});

printErrors = function (errors) {
    errors.forEach(function (error) {
        util.print("=>  \t".grey + error.red + "\n");
    });
};

module.exports.validate = function (obj) {
    var errors = options.validate(obj);
    if (errors.length) {
        printErrors(errors);
        example.print();
    } 

    return errors.length !== 0;   
}