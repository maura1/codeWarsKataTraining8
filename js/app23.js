DESCRIPTION:
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2

1. Creat a varialbe to hold the result
2. Square each number in the given array and add each number to a new array
3.Iterate over the array using for each and sum up the numbers in the array
4.Return the result*/

function squareSum(numbers){
    let result = 0
    let array = numbers.map(elem => elem*elem)
    array.forEach(elem=> result += elem)
    return result
  }


/*The arrow function can also be used
Using the reduce function, sum up the elements of the array after squaring each element
*/

const squareSum1 = numbers => numbers.reduce((accum, elem)=> accum + (elem*elem),0)

