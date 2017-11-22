// Self invoking function to create scope and eliminate global variables
(function() {
    var numbers = [1, 2, 3];
    var result = Utils.sum(numbers);
    document.getElementById("output").innerHTML = result;
})();