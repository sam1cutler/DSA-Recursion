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

    let resultList = [];
    
    // Base case: object with empty value
    for (const [key, value] of Object.entries(inputObject)) {
        if (value.length === 0) {
            return `/t${key}`
        } else {
            return `/t`+orgChart(value)
        }
    }

}

const output = orgChart(testObject);
console.log(output);