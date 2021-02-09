const fibonacci = function(input) {
    if (input === 1 || input === 2) {
        return 1;
    } else {
        return fibonacci(input-1) + fibonacci(input-2);
    }
}

console.log(fibonacci(10))