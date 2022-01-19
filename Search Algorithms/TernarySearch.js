/* 
    THE TERNARY SEARCH
    Pre-requisites - Input array must be sorted.
    As the name suggests, the Ternary Search divides the array into THREE parts.

    1. From the given array, find start and end element indices.
    2. Calculate mid1 as start + (end - start)/3
    3. Calculate mid2 as end - (end - start)/3
    4. If mid1th or mid2th element of the array equals the key, print found.
    5. If not, adjust values of mid1 and mid2 according to the value of the key.
*/


const ternarySearchRecursive = (inputArray, start, end, key) => {
    if(end >= start) {
        const mid1 = Math.floor(start + (end - start)/3)
        const mid2 = Math.floor(end - (end - start)/3)

        if(inputArray[mid1] === key) {
            console.log(`Found`)
        }
        else if(inputArray[mid2] === key) {
            console.log(`Found`)
        }

        if(key < inputArray[mid1]) {
            ternarySearchRecursive(inputArray, start, mid1-2, key)
        } else if(key > inputArray[mid2]) {
            ternarySearchRecursive(inputArray, mid2+1, end, key)
        } else {
            ternarySearchRecursive(inputArray, mid1+1, mid2-1, key)
        }
    }
}

const ternarySearch = (inputArray, key) => {
    ternarySearchRecursive(inputArray, 0, inputArray.length -1, key)
}

ternarySearch([1,3,5,7,12,56,57,89,90], 12)