/* 
    THE LINEAR SEARCH.
    The Linear Search algorithm iterates through the given set of inputs one by one to find matches. 
    When a match is found, it breaks out of the loop. Else, iterates in vain.
*/

const linearSearch = (inputDataSet, key) => {
    let flag = false;
    for(let i = 0; i<inputDataSet.length; i++) {
        if(inputDataSet[i] === key) {
            flag = true;
            break;
        }
    }
    var message = flag ? `Found` : `Not found`
    console.log(message)
}


// linearSearch([1,2,3,4,5], 8)
// linearSearch([1,2,3,4,5], 2)

module.exports = linearSearch