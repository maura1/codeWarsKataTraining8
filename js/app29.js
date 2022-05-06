/*
***TASK***

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

***EXAMPLE***
('HELLO WORLD!')  => ('HELLO WORLD')

*/

const removeExclamationMarks  = str => str.split('').filter(s => s !== '!').join('')


//Another option using the split() method and join() method

const remove = str => str.split('!').join('')