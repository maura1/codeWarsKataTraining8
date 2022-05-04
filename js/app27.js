/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

//Using the arrow function, first change the numbers to a string in order to convert to an array, as the higher order functions split()sort() only work on arrays. Then join the result and multiply by 1 which converts the string back to an arrray.


const descendingOrder = nums => String(nums).split('').sort((a,b)=>b -a).join('')*1