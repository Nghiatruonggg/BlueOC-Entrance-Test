// Sum of Top Two Integers
// Objective: Write a function that finds the sum of the two largest integers in an array.

// Requirements:
// Provide multiple test cases.
// Use any language you prefer; JavaScript or Python is recommended.
// [Optional] Include a unit test function.

// Example:
// Input: [1, 4, 2, 3, 5]
// Explanation: The two largest integers are 5 and 4. Their sum is 9.
// Output: 9

const topTwoSum = (arr) => {
    // Array must have length with at least 2 numbers
    if (arr.length < 2) {
        throw new Error("Array must have at least 2 numbers");
    }

    // Sorting array in descending order
    const descendingSortedArray = arr.sort((a,b) => b - a);

    // Sum 2 top numbers
    const topSum =  descendingSortedArray[0] + descendingSortedArray[1];
    return topSum
}

console.log(topTwoSum([1,4,2,3,5]))
console.log(topTwoSum([3,6,2,5,9]))
console.log(topTwoSum([1,9,3,12,10]))
console.log(topTwoSum([8,3,5,1,9]))
console.log(topTwoSum([-8,-3,5,-1,-9]))

// Error Testing
console.log(topTwoSum([1]))
console.log(topTwoSum([-10]))