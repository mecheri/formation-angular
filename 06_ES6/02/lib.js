//#region named exports
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
//#endregion

//#region default exports: function
// export default function() {
//     console.log('Hello from exported function');
// }
//#endregion

//#region default exports: class
// export default class {
//     constructor() {
//         console.log('Hello from exported class');
//     }
// }
//#endregion