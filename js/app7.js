/*Title: Find Maximum and Minimum Values of a List

Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

Examples:
  console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
  console.log(min([42, 54, 65, 87, 0]), 0);
  console.log(max([4,6,2,1,9,63,-134,566]), 566);
  console.log(max([5]), 5);*/




const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


//Another option is to use the sort method

const min1 = list => list.sort((a, b) => a - b)[0];

const max1 = list => list.sort((a, b) => b - a)[0];



