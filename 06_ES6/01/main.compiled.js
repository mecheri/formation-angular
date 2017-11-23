'use strict';

//#region let, const
// if ([1, 2, 3].length == 2) {
//     let test = "salut";
// }
// console.log(test); // test is undefined

// const PI = 3.14;
//#endregion


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
//     name: "Object",
//     show: function() {
//         this.nums.forEach(function(x) {
//             console.log(this.name);
//         })
//     },
//     show2: function() {
//         this.nums.forEach(x => {
//             console.log(this.name);
//         })
//     }
// };
// obj.show();
// //#endregion

// //#region classes, heritage
// class Obj {
//     constructor() {
//         this.nums = [1, 2, 3];
//         this.name = "Object";
//     }

//     show() {
//         this.nums.forEach(function(x) {
//             console.log(this.name);
//         })
//     }
// }

// class ChildObj extends Obj {}

// var obj = new Obj();
// obj.show;
// //#endregion

// //#region default, Spread
// class Obj2 {
//     constructor(name = "Object", ...nums) {
//         this.nums = nums;
//         this.name = name;
//     }

//     show() {
//         this.nums.forEach(function(x) {
//             console.log(this.name);
//         })
//     }
// }

// var obj = new Obj2("Object2", 1, 2, 3);
// obj.show;
// //#endregion

// //#region backquote
// let a = "test"
// let b = `qmldsdlsqdksmd ${a}`;
// console.log(b);
// //#endregion

//#region promises
function timer() {
    var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return resolve('fin du timeout avec succes');
        }, duration);
    });
}

timer(500).then(function (msg) {
    return console.log(msg);
}).catch(function (err) {
    return console.log(err);
});
//#endregion
