export default class Lib {
    private _hello;
    constructor() {
        this._hello = 'salut';
    }
    hello() {
        return this._hello
    }
}