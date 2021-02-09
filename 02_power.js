console.log('Power!');

const powerCalculator = function(base, exponent) {

    if (exponent < 0) {
        // error message
        return 'Exponent should be greater than or equal to zero.';

    } else if (exponent === 0) {
        // base case
        return 1;

    } else {
        // recursive case
        return base * powerCalculator(base, exponent - 1);

    }
}

const answer = powerCalculator(3,3);

console.log(answer);