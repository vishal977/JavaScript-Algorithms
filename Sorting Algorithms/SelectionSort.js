/*
    THE SELECTION SORT.
    In every iteration, the algorithm finds the smallest element in the sub-array and moves it to the beginning of it.
*/


const selectionSort = (inputArray) => {
    let n = inputArray.length 

    for(let i = 0; i < n; i++) {
        let smallestElementIndex = i
        for(let j = i + 1; j < n; j++) {
            if(inputArray[j] < inputArray[smallestElementIndex]) {
                smallestElementIndex = j
            }
        }
        //Swap the elements at i and smallestElementIndex
        let temp = inputArray[smallestElementIndex]
        inputArray[smallestElementIndex] = inputArray[i]
        inputArray[i] = temp
    }
    return inputArray
}

console.log(selectionSort([67,43,778,2,90]))