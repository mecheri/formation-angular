Utils.reduce = function(array, callback, memo) {
    array.forEach(item => {
        memo = callback(item, memo)
    });

    return memo;
}