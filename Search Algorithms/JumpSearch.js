/*
    THE JUMP SEARCH
    Pre-requisites - Input array must be sorted.

    1. From the input array, find the number of elements 'n'.
    2. Now, calculate the step size 'm' as m = sqrt(n). Round it off to nearest Integer.
    3. Initialize start = 0 and end = m.
    4. Now, start iterating the array, checking the mth element in each iteration.
    5. Keep iteration going until inputArray[end] > key or end becomes greater than n.
    6. Now, perform linear search between start and end indices to find the element.
*/


export const jumpSearch = (inputArray, key) => {
    let n = inputArray.length 
    const step = Math.floor(Math.sqrt(n))
    let start = 0
    let end = step

    while(inputArray[end] <= key && end < n) {
        start = end
        end += step
        if(end > n-1) {
            end = n
        }
    }
    //Linear search from start to end.
    for(let i = start; i < end; i++) {
        if(inputArray[i] === key) {
            return i
        }
    }
    return -1
}


jumpSearch([1,2,3,677,846,993, 1024, 7812, 9992], 7812) > -1 ? console.log(`Found`) : console.log(`Not found`)
jumpSearch([1,2,3,677,846,993, 1024, 7812, 9992], 0) > -1 ? console.log(`Found`) : console.log(`Not found`)