/* String Length Frequency */
// Objective: Write a function that identifies the most frequent string lengths in an array of strings.

// Requirements:
// Provide multiple test cases.
// Use any language you prefer; JavaScript or Python is recommended.
// [Optional] Include a unit test function.

// Example:
// Input: ['a', 'ab', 'abc', 'cd', 'def', 'gh']
// Explanation: The string lengths are [1, 2, 3, 2, 3, 2]. The most frequent length is 2, corresponding to ['ab', 'cd', 'gh'].
// Output: ['ab', 'cd', 'gh']

// Time Allocation: 45 minutes


const mostFrequentLengths = (strings) => {
    const lengthCount = {};

    // Count the number of each string length's appearances
    strings.forEach((string) => {
        const length = string.length
 
        if (!lengthCount[length]) {
            lengthCount[length] = 1;
        } else {
            lengthCount[length]++;
        }
    })

    // Find the maximum frequency (most common string length) in lengthCount
    const maxFrequency = Math.max(...Object.values(lengthCount))
    

    // Revert object to array
    const lengthCountArray = Object.keys(lengthCount)

    // Filter out the string number that has maximum frequency
    const filteredCount = lengthCountArray.filter((length) => {
        return lengthCount[length] === maxFrequency
    })


    // Convert from string back to number
    const mostFrequentLengths = filteredCount.map(Number)
    
    // Filter strings which have the most frequent lengths
    return strings.filter((string) => {
        return mostFrequentLengths.includes(string.length)
    })
}

console.log(mostFrequentLengths(['a', 'ab', 'abc', 'cd', 'def', 'gh']))
console.log(mostFrequentLengths(['yes', 'sir', 'hello', 'hi', 'three', 'bye']))
console.log(mostFrequentLengths(['yo', 'lo', 'good', 'morning', 'after', 'no']))


