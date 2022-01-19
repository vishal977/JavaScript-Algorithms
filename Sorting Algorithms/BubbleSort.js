/*
    THE BUBBLE SORT.
    Keep comparing adjacent elements of the array and swap them if they are not in order.
*/

const bubbleSort = (inputArray) => {
    let n = inputArray.length 
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n-i-1; j++ ) {
            if(inputArray[j] > inputArray[j+1]) {
                let temp = inputArray[j+1]
                inputArray[j+1] = inputArray[j]
                inputArray[j] = temp
            }
        }
    }
    return inputArray
}

console.log(bubbleSort([67,43,778,2,90]))

