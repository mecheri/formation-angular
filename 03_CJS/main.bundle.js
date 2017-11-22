(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function add(a, b) {
    return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
var sum = require("./sum");

var numbers = [1, 2, 3];
var result = sum(numbers);
document.getElementById("output").innerHTML = result;
},{"./sum":4}],3:[function(require,module,exports){
function reduce(array, callback, memo) {
    array.forEach(item => {
        memo = callback(item, memo)
    });

    return memo;
}

module.exports = reduce;
},{}],4:[function(require,module,exports){
var reduce = require("./reduce");
var add = require("./add");

function sum(array) {
    return reduce(array, add, 0);
}

module.exports = sum;
},{"./add":1,"./reduce":3}]},{},[2]);
