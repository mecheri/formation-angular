define(["./reduce", "./add"], function(reduce, add) {
    return function sum(array) {
        return reduce(array, add, 0);
    }
});