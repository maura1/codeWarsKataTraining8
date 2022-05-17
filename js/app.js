/*Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.*

The input is a word
Expected output is the same word returned with the first element in uppercase
Eg, word => Word
    i => I
    glasswear => Glasswear
    
we can use charAt(0) to select the first element of the word
then apply toUpperCase() to that element*/

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

console.log(capitalizeWord('word'));

//Using arrow function
const capitalizeWord = (word) =>
    word.charAt(0).toUpperCase() + word.substring(1);
