/* 
    THE BINARY SEARCH
    Pre-requisites - Input array should be sorted. We're sorting it here ourselves for convenience.
    Steps involved:
    1. Sorts the input array in ascending order (Note: We could also specify a condition that the input array MUST BE sorted. here, I am sorting the input myself.)
    2. Finds the middle element of the array. 
    3. If middle element is greater than the key, narrow down search to first half.
    4. If middle element is lesser than the key, narrow down search to the second half.
    5. Repeat until the key is found as the middle element. 
*/

const binarySearch = (inputData, key) => {
    const sortedInput = inputData.sort();
    binarySearchRecursion(sortedInput, 0, sortedInput.length -1, key)
}

const binarySearchRecursion = (input, start, end, key) => {
    let middle = Math.ceil((start + end) / 2)
    let middleElement = input[middle]
    if(middleElement === key) {
        console.log(`Found!`)
        return true
    } else if(middleElement > key) {
        binarySearchRecursion(input, start, middle -1, key)
    } else if(middleElement < key) {
        binarySearchRecursion(input, middle + 1, end, key)
    }
}

// binarySearch([4,2,1,5,0], 1)
module.exports = binarySearch