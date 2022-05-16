
/*DESCRIPTION:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

TASK

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

EXAMPLES: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

PSEUDO CODE

Use the higher ofder function map() to create a new array, where each element of the array is called and a provided function is applied to each element.
The function here is appliing a formatted string to each element, returning key value pairs for each element. The key element is an assending number starting with the number 1, and the value is the element that was given in the array.
If there is nothing in the given array, an empty element is returned.*/

const number = arr => arr.map((letter,index)=> `${index + 1}: ${ letter}`)