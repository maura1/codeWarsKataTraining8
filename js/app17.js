/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.*/


//To filter out the geese we can use the arrow function with the filter() higher order method
const gooseFilter = birds => birds.filter(bird=>bird ==='Mallard'||bird ==='Hook Bill'||bird ==='Crested'||bird==='Blue Swedish') 

//Making a variable that excludes the !geese, anf filter over the list
const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter1 = birds => birds.filter(bird => !GEESE.includes(bird));
