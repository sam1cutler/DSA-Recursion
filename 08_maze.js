const anagram = function(input) {
    
    // define character list
    let characterList = [];
    for (let i=0; i < input.length; i++) {
        characterList.push(input[i]);
    }
    console.log(characterList);

}

console.log(anagram('east'));