var schema = require("validate"),
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

module.exports = function (obj) {
    return options.validate(obj);   
}