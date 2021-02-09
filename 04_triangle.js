console.log('Triangle!');

const nthTriangular = function(input) {
    if (input === 1) {
        return 1;
    } else {
        return input + nthTriangular(input-1)
    }
}

console.log(nthTriangular(2));