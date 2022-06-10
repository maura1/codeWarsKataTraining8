/*DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!;*/


/*Using the arrow function 
transform the word to lowercase using toLowerCase()
Use the split() function to transfrom the word to an array so that higher order functions such as map() can be applied.
Using the map which applied a function to each element, check if the element the indexOf the element is also the lastIndexOf the element, if true this would mean that the character only appears once in the word.
Using the tenary operator, if the  character only appears once assign it '(', otherwise assign it to ')'.
Then join the characters using the join() function */



const duplicateEncode = word => word.toLowerCase().split('').map((el, idx, word)=>
       word.indexOf(el) == word.lastIndexOf(el) ? '(' : ')').join('')
