let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeSolver = function(activeMaze, row, column) {

    const mazeHeight = activeMaze.length;
    const mazeWidth = activeMaze[0].length;
    
    // ~ Try going right ~
    // check if it's possible
    if (column+1 <= mazeWidth) {
        // identify square
        const square = activeMaze[row-1][column];
        // found e?
        if (square === 'e') {
            return 'R';
        } else if (square === ' ') {
            // mark 'current' position as done
            activeMaze[row-1][column-1] = 'X';
            return 'R'+mazeSolver(activeMaze, row, column+1); 
        } 
    } 
    // If didn't *return* on either condition above, it's b/c
    // 1) CAN'T go right, or 
    // 2) square != e or ' ', and therefore square = '*', so...
    // ~ Try going down ~
    // check if it's possible
    if (row+1 <= mazeHeight) {
        // identify square
        const square = activeMaze[row][column-1];
        // found e?
        if (square === 'e') {
            return 'D';
        } else if (square === ' ') {
            // mark 'current' position as done
            activeMaze[row-1][column-1] = 'X';
            return 'D'+mazeSolver(activeMaze, row+1, column);
        }
    }
    // ~ Try going left ~
    // check if it's possible
    if (column-1 >= 1) {
        // identify square
        const square = activeMaze[row-1][column-2];
        // found e?
        if (square === 'e') {
            return 'L';
        } else if (square === ' ') {
            // mark 'current' position as done
            activeMaze[row-1][column-1] = 'X';
            return 'L'+mazeSolver(activeMaze, row, column-1);
        }
    }
    // ~ Try going up ~
    // check if it's possible
    if (row-1 >= 1) {
        // identify square
        const square = activeMaze[row-2][column-1];
        // found e?
        if (square === 'e') {
            return 'U';
        } else if (square === ' ') {
            // mark 'current' position as done
            activeMaze[row-1][column-1] = 'X';
            return 'U'+mazeSolver(activeMaze, row-1, column);
        } 
    } 
}

console.log(mazeSolver(maze, 1,1));