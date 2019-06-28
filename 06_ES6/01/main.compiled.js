"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


//-----------------------------------------
//#region classes, heritage
var Obj = function () {
    function Obj() {
        _classCallCheck(this, Obj);

        this.nums = [1, 2, 3];
        this.message = "salut";
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

var ChildObj = function (_Obj) {
    _inherits(ChildObj, _Obj);

    function ChildObj() {
        _classCallCheck(this, ChildObj);

        return _possibleConstructorReturn(this, (ChildObj.__proto__ || Object.getPrototypeOf(ChildObj)).apply(this, arguments));
    }

    return ChildObj;
}(Obj);

var obj = new ChildObj();
obj.show();
//#endregion


// //-----------------------------------------
// //#region default, Spread
// class Obj {
//     constructor(message = "Salut", ...nums) {
//         this.nums = nums;
//         this.message = message;
//     }
//     show() {
//         this.nums.forEach(x => {
//             console.log(this.message + ' ' + x);
//         })
//     }
// }
// var obj = new Obj("Coucou", 1, 2, 3);
// obj.show();
// //#endregion


// //-----------------------------------------
// //#region backquote
// let a = "à tous"
// let b = `Salut ${a}`;
// console.log(b);
// //#endregion


// // -----------------------------------------
// //#region promises
// function timer(duration = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve('fin du timeout avec succes'), duration);
//         setTimeout(() => reject('une erreur s\'est produite'), duration);
//     });
// }
// timer(500)
//     .then(msg => console.log(msg))
//     .catch(err => console.error(err));
// // #endregion
