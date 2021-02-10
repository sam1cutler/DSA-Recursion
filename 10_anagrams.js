console.log('Anagrams!');
   
function anagrams(input) {

    const characterList = input.split('');

    let resultList = []
    
    // base case: list of a single character
    if (characterList.length === 1) {
        resultList.push(characterList[0]);
    } else {
        // if list > 1 character, need to do same operation for
        //   each character in list, treating it as "starter"
        for (let i=0 ; i<characterList.length ; i++) {
            // identify the "starter" character
            const starter = characterList[i];

            // create the "remainder" list = all but "starter" character
            let newList = [];
            for (let j=0 ; j<characterList.length ; j++) {
                if (i !== j) {
                    newList.push(characterList[j])
                }
            }

            // func takes string as input, not list, so make string from list
            const newInput = newList.join('');
            
            // *recursion*: feed input back into anagrams func,
            //    which will return a list of some length
            const nextStep = anagrams(newInput);

            // whatever current state of resultsList, will concat
            //    onto it the results of...
            resultList = resultList.concat(
                // ...iterating over items in anagrams func output list...
                nextStep.map(item => {
                    // ... for each list item, appending the "starter" character
                    return starter+item
                })
            )
        }
    }
    return resultList;
}

const output = anagrams('east');

console.log(output);