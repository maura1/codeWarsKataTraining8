/*
**TASK**
Multiply a given number by eight if it is an even number, otherwise multiply the number by nine

Use the modular operator (%), this returns the remainder when a number is divided by another.
If a number is divided by two and the modular operator returns zero, then the number is an even number.
The tenary operator can be used to choose what action can be taken depending on whether the number is even or odd

*/

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9

//Alternatively

const simpleMultiplication1 = number => number * (number % 2 ? 9:8)