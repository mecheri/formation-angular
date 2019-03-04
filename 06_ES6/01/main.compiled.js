"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// //#region let, const
// if ([1, 2, 3].length == 3) {
//     let message = "salut";
// }
// console.log(message); // test is undefined
// const PI = 3.14;
// //#endregion


// //-----------------------------------------
// //#region arrow functions
// [1, 2, 3].forEach(function(x) {
//     console.log(x);
// });
// [1, 2, 3].forEach(x => {
//     console.log(x);
// });
// [1, 2, 3].forEach((x, y) => {
//     console.log(x, y);
// });
// // qui est "this" resolu
// var obj = {
//     nums: [1, 2, 3],
//     message: "salut",
//     show: function() {
//         console.log('--------without arrow function----------')
//         this.nums.forEach(function(x) {
//             console.log(this.message + ' ' + x);
//         })
//     },
//     show2: function() {
//         console.log('--------with arrow function----------')
//         this.nums.forEach(x => {
//             console.log(this.message + ' ' + x);
//         })
//     }
// };
// obj.show();
// obj.show2();
// //#endregion


// //-----------------------------------------
// //#region classes, heritage
// class Obj {
//     constructor() {
//         this.nums = [1, 2, 3];
//         this.message = "salut";
//     }
//     show() {
//         this.nums.forEach(x => {
//             console.log(this.message + ' ' + x);
//         })
//     }
// }
// class ChildObj extends Obj {}
// let obj = new Obj();
// obj.show();
// //#endregion


//-----------------------------------------
//#region default, Spread
var Obj = function () {
    function Obj() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Salut";

        _classCallCheck(this, Obj);

        for (var _len = arguments.length, nums = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            nums[_key - 1] = arguments[_key];
        }

        this.nums = nums;
        this.message = message;
    }

    _createClass(Obj, [{
        key: "show",
        value: function show() {
            var _this = this;

            this.nums.forEach(function (x) {
                console.log(_this.message + ' ' + x);
            });
        }
    }]);

    return Obj;
}();

var obj = new Obj("Coucou", 1, 2, 3);
obj.show();
//#endregion


// //-----------------------------------------
// //#region backquote
// let a = "Mehdi"
// let b = `Salut ${a}`;
// console.log(b);
// //#endregion


// // -----------------------------------------
// //#region promises
// function timer(duration = 1000) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => resolve('fin du timeout avec succes'), duration);
//         // setTimeout(() => reject('une erreur s\'est produite'), duration);
//     });
// }
// timer(500)
//     .then(msg => console.log(msg))
//     .catch(err => console.error(err));
// // #endregion
