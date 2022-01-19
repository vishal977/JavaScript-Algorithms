/*
    THE INSERTION SORT.
*/

const insertionSort = (inputArray) => {
    let n = inputArray.length
    for(let i = 1; i < n; i++) {
        let temp = inputArray[i]
        let j = i -1
        while(j >= 0 && inputArray[j] > temp) {
            inputArray[j+1] = inputArray[j]
            j--
        }
        inputArray[j+1] = temp
    }
    return inputArray
}

console.log(insertionSort([67,43,778,2,90]))

module.exports = insertionSort