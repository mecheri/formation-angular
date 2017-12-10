"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//#region intro
var test = 145;
//#endregion
//#region enums
var DIRECTIONS;
(function(DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
var up = DIRECTIONS.UP;
//#endregion
//#region functions
function isPair(x) {
    return x % 2 === 0;
}
isPair(2);

function isPair2(x) {
    if (typeof x !== 'number') {
        x = parseInt(x, 10);
    }
    return x % 2 === 0;
}
isPair2(2);

function hello(t) {
    var out = [];
    for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
        var item = t_1[_i];
        out.push(item);
    }
    return out;
}
hello(['qsd', 'sdsq', 'qsd']);

function isOdd(x, callback) {
    return x % 2 !== 0;
}
isOdd(2, function(params) { return console.log(params); });
//#endregion
//#region classes
var Demo = /** @class */ (function() {
    function Demo() {}
    Demo.demo = function() {};
    return Demo;
}());
var d = new Demo();
d.a = 1;
Demo.demo();
var Demo2 = /** @class */ (function() {
    function Demo2(options) {
        this.options = options;
    }
    return Demo2;
}());
var d2 = new Demo2({
    x: 2,
    y: 2,
    success: function(data) {}
});
//#endregion
//#region namespaces
// creee une self invoking function
// pas indispensable si on travail avec les modules
var Viveris;
(function(Viveris) {
    var toto; // accessible uniquement dans le namespace
    var Demo = /** @class */ (function() {
        function Demo() {}
        return Demo;
    }());
    Viveris.Demo = Demo;
})(Viveris || (Viveris = {}));
var v = new Viveris.Demo();
//#endregion
//#region modules
// import Lib from './lib';
// let lib = new Lib();
//#endregion
//#region decorators
// un decorateur est une fonction
function component(target) {
    console.log(2);
}

function component2(metadata) {
    return function name(target) {
        console.log(metadata, target);
    };
}
// @component
var Demo3 = /** @class */ (function() {
    function Demo3(options) {
        this.options = options;
    }
    Demo3 = __decorate([
        component2({
            selector: 'demo3-compoenet'
        })
    ], Demo3);
    return Demo3;
}());
//#endregion
//#region vendors 
// importer une librairie tierce de nodeJS
// typescript ne connais le type de scrollTo
// il faut un fichier de declaration qui decrit comment fonctionne un module
var scroll_to_1 = require("scroll-to");
scroll_to_1.default(500, 1200, {
    ease: 'out-bounce',
    duration: 1500
});
// Creer un fichier de declation pour jQuery peut prendre beacoup de temps
// heureusement y a un outil --> @types
// declare const $: JQueryStatic;
var $ = require("jquery");
$('#btn').click(function() {
    scroll_to_1.default(0, 0);
});
//#endregion