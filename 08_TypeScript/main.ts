//#region intro
var test: number = 145;
console.log(test);
//#endregion


//-----------------------------------------
//#region enums
// enum DIRECTIONS {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }
// let up = DIRECTIONS.UP;
//#endregion


//-----------------------------------------
//#region functions
// function isPair(x: number): boolean {
//     return x % 2 === 0;
// }
// isPair(2);


// function isPair2(x: number | string): boolean {
//     if (typeof x !== 'number') {
//         x = parseInt(<string>x, 10);
//     }
//     return <number>x % 2 === 0;
// }
// isPair2(2);


// function hello(t: Array<string>): Array<string> {
//     let out = [];
//     for (const item of t) {
//         out.push(item);
//     }

//     return out;
// }
// hello(['qsd', 'sdsq', 'qsd']);


// function isOdd(x: number, callback: (num: number) => void): boolean {
//     return x % 2 !== 0;
// }

// isOdd(2, (params) => console.log(params));
//#endregion


//-----------------------------------------
//#region classes
// class Demo {

//     public a;
//     protected b;
//     private c;
//     constructor() {

//     }
//     static demo() {

//     }
// }
// var d = new Demo();
// d.a = 1;
// Demo.demo();
//#endregion


//-----------------------------------------
//#region interfaces
// definir la structure d'un objet que l'on passe en parametre
// interface IDemo2 {
//     x: number;
//     y: number;
//     success: (data: string) => void;
// }
// class Demo2 {
//     private options: IDemo2;
//     constructor(options: IDemo2) {
//         this.options = options;
//     }
// }
// let d2 = new Demo2({
//     x: 2,
//     y: 2,
//     success: (data: string) => { }
// });
//#endregion


//-----------------------------------------
//#region namespaces
// // creee une self invoking function
// // pas indispensable si on travail avec les modules
// namespace Viveris {
//     let toto; // accessible uniquement dans le namespace
//     export class Demo {
//         private options;
//         constructor() {
//         }
//     }
// }
// let v = new Viveris.Demo();
//#endregion


//-----------------------------------------
//#region modules
// import Lib from './lib';
// let lib = new Lib();
//#endregion


//-----------------------------------------
//#region decorators
// // un decorateur est une fonction
// function component(target) {
//     console.log(2);
// }

// function component2(metadata) {
//     return function name(target) {
//         console.log(metadata, target);
//     }
// }

// // @component
// @component2({
//     selector: 'demo3-compoenet'
// })
// class Demo3 {
//     private options;
//     constructor(options) {
//         this.options = options;
//     }
// }
//#endregion


//-----------------------------------------
//#region vendors 
// // importer une librairie tierce de nodeJS
// // typescript ne connais le type de scrollTo
// // il faut un fichier de declaration qui decrit comment fonctionne un module
// import scrollTo from 'scroll-to';

// scrollTo(500, 1200, {
//     ease: 'out-bounce',
//     duration: 1500
// });

// // Creer un fichier de declation pour jQuery peut prendre beaucoup de temps
// // heureusement y a un outil --> @types
// // declare const $: JQueryStatic;
// import * as $ from 'jquery';

// $('#btn').click(function () {
//     scrollTo(0, 0);
// });
//#endregion