/* 
    THE FIBONACCI SEARCH
    Pre-requisites - Input array should be in sorted order.
    It works similar to the Binary Search with the difference being the partition style. Fibonacci search partitions the array into very dissimilar halves.
    
    1. Find a Fibonacci number F(k) such that F(k) >= n. Here, n is the number of elements in the array.
    2. If F(k) is determined to be zero, exit and print that the element is not present (for obvious reasons).
    3. Initialize offset variable to -1.
    4. Calculate i as min(offset + F(k-2), n-1)
    5. If the ith element of the array is the key we're looking for, print found. 
    6. If the key is greater than ith element, adjust values of k to k-1 and offset to i and proceed again.
    7. Else if key is lesser than ith element, adjust value of k to k-2 and proceed again.

*/


const fibonacciSearch = (inputArray, key) => {
    let n = inputArray.length
    let fibk2 = 0 // F(k-2)
    let fibk1 = 1 // F(k-1)
    let fibk = fibk2 + fibk1 //F(k)

    while(fibk <n) {
        fibk2 = fibk1
        fibk1 = fibk
        fibk = fibk2 + fibk1
    }

    if(fibk === 0) {
        return -1
    }

    let offset = -1

    while(fibk > 1) {
        const i = Math.min(offset + fibk2, (n-1))
        let element = inputArray[i]
        if(element === key) {
            return i
        } else if(element > key) {
            fibk = fibk1
            fibk1 = fibk2
            fibk2 = fibk - fibk1
        } else if(element < key) {
            fibk = fibk1
            fibk1 = fibk2
            fibk2 = fibk - fibk1
            offset = i
        }

        if(fibk1 && inputArray[offset+1] === key) {
            return offset+1
        }
        return -1
    }
}

// fibonacciSearch([1,3,5,7,12,56,57,89,90], 1) >= 0 ? console.log(`Found`) : console.log(`Not found`)
// fibonacciSearch([1,3,5,7,12,56,57,89,90], 2316) >= 0 ? console.log(`Found`) : console.log(`Not found`)
module.exports = fibonacciSearch