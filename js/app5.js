/*Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

*/
//Use arrow funtion with tenary operator
//1. if p1 and p2 have equal values, then the outcome is a draw

const rps = (p1, p2) =>
    p2 === p1
        ? 'Draw!'
        : p1 === 'scissors' && p2 === 'paper'
        ? 'Player 1 won!'
        : p1 === 'rock' && p2 === 'scissors'
        ? 'Player 1 won!'
        : p1 === 'paper' && p2 === 'rock'
        ? 'Player 1 won!'
        : 'Player 2 won!';
/*Title: How much water di I need
My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.
 
The input will be 3 integers

Expected output:
    (10,10,21) => 'Too much clothes'
    (10,10,5) => 'Not enough clothes'
    (10,5,8)  => 13.31

Use the arrow function with tenary operator*/

const howMuchWater = (water, load, clothes) =>
       clothes > 2 * load ? 'Too much clothes'
    : (clothes < load ? 'Not enough clothes' 
    : Number((water * 1.1 ** (clothes - load)).toFixed(2)))