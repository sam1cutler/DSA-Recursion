console.log('Anagrams!');

const testList = ['e','a','s','t'];

for (let i=0 ; i<testList.length ; i++) {
    console.log(testList[i]);
    const starter = testList[i];
    let newList = [];
    for (let j=0 ; j<testList.length ; j++) {
        if (i !== j) {
            newList.push(testList[j])
        }
    }


    console.log(`Start with ${starter}.`);
    console.log(newList);
}

/*
const testList = ['a','t'];
const starterList = ['e','s'];

const output = starterList.map(starter => {
    return testList.map(item => {
        return starter+item;
    })
})
*/

 /*   
function anagrams(input) {
    console.log(input);

    const characterList = input.split('');
    console.log(characterList);

    let resultList = []

    if (characterList.length === 1) {
        resultList.push(characterList[0]);
    } else {
        for (let i=0; i<characterList.length ; i++) {
            console.log(i);

            const starter = characterList[i];
            console.log(starter);

            //console.log(characterList.splice(i,1));
        }
    }

    return resultList;

    
}

const output = anagrams('east');

console.log(output);

*/

/*
const anagrams = function(input) {
    
    // Initialize empty character list
    let characterList = [];

    // Identify characters of input
    for (let i=0; i<input.length ; i++) {
        characterList.push(input[i]);
    }

    console.log(characterList);

    const output = characterList.map( subList => {
        console.log(subList);
        return subList;
    })

    console.log(output)

    
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

*/