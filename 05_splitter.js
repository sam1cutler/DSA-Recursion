console.log('Splitter!');

const stringSplitter = function(input, separator) {
    // base case
    if (!input.includes(separator)) {
        return input
    } else {
        const activeIndex = input.indexOf(separator);

        const fragment = input.slice(0, activeIndex);

        const newInput = input.slice(activeIndex+1);
       
        const fragmentList = [fragment];
        
        return fragmentList.concat(stringSplitter(newInput, separator));
    }
}

const output = stringSplitter('abcae/laskfj.gacaewfweh/jk.oiqwej.asnf/alsfj', '/');

console.log(output);
