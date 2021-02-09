console.log('Anagrams!');

const anagrams = function(input) {
    
    // Initialize empty character list
    let characterList = [];

    // Identify characters of input
    for (let i=0; i<input.length ; i++) {
        characterList.push(input[i]);
    }

    console.log(characterList);

    // Base case
    if (characterList.length === 1) {
        return characterList[0];
    } else {
        for (let i=0; i<characterList.length ; i++) {
            const reducedList = characterList.splice(i, 1);
            return characterList[i] + anagrams(reducedList);
        }
    }

}

anagrams('east');

