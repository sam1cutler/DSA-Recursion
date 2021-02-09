console.log('Reverse!');

const reverseString = function(inputString) {

    // base case
    if (inputString.length === 1) {
        return inputString[0];
    } else {
        return inputString.slice(-1) + reverseString(inputString.slice(0,-1));
    }
}

console.log(reverseString('normal'));