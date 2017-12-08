require(["./sum"], function(sum) {
    var numbers = [1, 2, 3];
    var result = sum(numbers);
    document.getElementById("output").innerHTML = result;
});