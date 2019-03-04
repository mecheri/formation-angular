"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lib = /** @class */ (function () {
    function Lib() {
        this._hello = 'salut';
    }
    Lib.prototype.hello = function () {
        return this._hello;
    };
    return Lib;
}());
exports.default = Lib;
