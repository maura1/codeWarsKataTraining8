/*Given an array with numbers, the requirement is to return a fixed list where the values increment by 1 for each index. Start with the minimum value and end with the maximum value
Input: 1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

Create an empty array to output our new values
We can use the spread operator to get the min and max numbers and then use these as the start and end point.
Using the for loop we can iterate through and add each value to the new array using push()*/

function pipeFix(numbers) {
    let start = Math.min(...numbers);
    let end = Math.max(...numbers);
    let newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr;
}
