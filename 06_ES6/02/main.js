//#region named exports
import { square, diag } from './lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

import * as lib from './lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
//#endregion


// //#region default exports: functions
// import libFunc from 'lib';
// libFunc();
// //#endregion

// //#region default exports: classes
// import LibClass from 'lib';
// let inst = new LibClass();
// //#endregion

// //#region default and named exports 
// import Lib, { square, diag } from 'lib';
// //#endregion