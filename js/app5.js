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
