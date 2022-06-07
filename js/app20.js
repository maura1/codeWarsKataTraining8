/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Using the arrow function
 Use the reduce method to sum up the total test scores from the class
 Divide the sum by the amount of scores to get the average
 Use the tenary operator to check who had the highest scores.*/
 const betterThanAverage = (classPoints, yourPoints) =>classPoints.reduce((x, y) => x + y, 0) / classPoints.length < yourPoints ? true:false