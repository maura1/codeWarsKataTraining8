/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


Eg:
Let's travel abroad shall we => 2
bitcoin take over the world maybe who knows perhaps => 3

1.The length of the string is not given,we can use the spread operator (...) and spit the sentence into individual words using split(' ').
2.Using the map function, find the lenght of each word.
3.Use Math.min to find the shortest word*/

const findShort = str => Math.min(...str.split(' ').map((word)=> word.lenght))

//Using sort()

const findShort1 = str => str.split(' ').sort((a,z)=>a.lenght-z.lenght)[0].length