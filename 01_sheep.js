console.log('Sheep!');

const countSheep = function(number) {

    // base case: "counter" has reached 0, print message
    if (number === 0) {
        console.log('All sheep jumped the fence.')
    } else {
        console.log(`${number}: Another sheep jumps over the fence.`);
        return countSheep(number-1)
    }
}

countSheep(4);