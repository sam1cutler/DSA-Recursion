console.log('Org chart!');

const testObject = {
    Zuck: {
        Schroep: {
            Bos: {
                Steve: '',
                Kyle: '',
                Andra: '',
            },
            Zhao: {
                Richie: '',
                Sofia: '',
                Jen: ''
            }
        },
        Schrage: {
            VanDyck: {
                Sabrina: '',
                Michelle: '',
                Josh: ''
            },
            Swain: {
                Blanch: '',
                Tom: '',
                Joe: ''
            }
        }
    }
}

const orgChart = function(inputObject) {

    let result = '';
    
    // Base case: object with empty value
    for (const [key, value] of Object.entries(inputObject)) {
        
        console.log(`Key is ${key}.`)
        console.log(result)

        
        if (value.length === 0) {
            result += `\t${key}\n`
        } else {
            console.log('Value is:')
            console.log(value);
            result += key+`\n\t`+orgChart(value);
        }
    }

    return result;
}

const output = orgChart(testObject);
console.log(`Total output is:`);
console.log(output)