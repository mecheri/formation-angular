define([], function() {
    return function reduce(array, callback, memo) {
        array.forEach(item => {
            memo = callback(item, memo)
        });

        return memo;
    }
});