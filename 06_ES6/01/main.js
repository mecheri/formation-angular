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
// var obj = new Obj();
// obj.show();
// //#endregion


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