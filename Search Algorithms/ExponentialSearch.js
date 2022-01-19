/* 
    THE EXPONENTIAL SEARCH
    Pre-requisites - Input array should be in sorted order.

    It is an optimized Binary Search where the start and end indices are optimized to the most feasible values before the recursive Binary
    Search function is called upon.

    Here are the steps:
    1. From the input array, find 'n' - the total number of elements.
    2. Let the value to be found be represented by 'key'.
    3. Initialize loop variable 'i' to 1. Then, for every i < n and inputArray[i] <= key, increment i by i*2.
    3. This is repeated until we get a value of i that is greater than or equal to n.
    4. Once that is done, we call upon the Binary Search algorithm with the starting index as i/2 and end index as min(i,n-1)

*/

const exponentialSearch = (inputData, key) => {
    const n = inputData.length
    let i = 1;
    while(i < n && inputData[i] <= key ) {
        i = i*2;
    }
    binarySearchRecursion(inputData, i/2, Math.min(i, n-1), key)

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

// exponentialSearch([2,130,224,278,303,378,440,556,2135], 556)