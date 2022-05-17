/*Given an array, return the smallest integer
eg. Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345 

Using the arrow function, use the spread operator and Math.min */

const minNum = (arr) => Math.min(...arr);

console.log(minNum([1, 2, 3, 7, 2, 93, 1]));

//Using a class and constructor

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

//Using arrow function with the sort function

const minNum1 = (arr) => arr.sort((a, b) => a - b)[0];
