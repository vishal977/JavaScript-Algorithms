/*
    THE QUICK SORT
*/

const quickSort = (inputArr, start, end) => {
    if(start < end) {
        let pivot = partition(inputArr, start, end)

        quickSort(inputArr, start, pivot - 1)
        quickSort(inputArr, pivot + 1, end)
    }
}

const partition = (inputArr, start, end) => {
    let pivot = inputArr[end]
    let i = (start - 1)

    for(let j = start; j <= end; j++) {
        if(inputArr[j] < pivot) {
            i++
            let temp = inputArr[j]
            inputArr[j] = inputArr[i]
            inputArr[i] = temp
        }
    }
    let temp = inputArr[i+1]
    inputArr[i+1] = inputArr[end]
    inputArr[end] = temp

    return (i + 1)
}

    var inputArr = [67,43,778,2,90];
    quickSort(inputArr, 0, inputArr.length -1)
    console.log(inputArr)
