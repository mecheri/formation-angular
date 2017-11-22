var reduce = require("./reduce");
var add = require("./add");

function sum(array) {
    return reduce(array, add, 0);
}

module.exports = sum;