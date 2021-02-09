const factorial = function(input) {
    // base case
    if (input === 1) {
        return 1;
    } else {
        // recursive case
        return input * factorial(input-1);
    }
}

console.log(factorial(3))