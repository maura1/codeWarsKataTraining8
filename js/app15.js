/*Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/

//1.Using the arrow function first check if the array is empty or only has one element, if this is true, return 0.
//2. Use Math.max and Math.min to find the total difference between the numbers

const sumOfDifferences = arr => !arr || arr.length <= 0 ? 0 : Math.max(...arr)-Math.min(...arr)



