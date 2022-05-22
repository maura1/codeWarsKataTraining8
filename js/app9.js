/*Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always has even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74


Solution:
1.Sort the numbers in the array
2.Create a variable that will contain the sum of the numbers
3.Multiply the first element of the array with the last element and add the result to the sum variable. We can get the first and last variable by using pop and shift()
4.Continue doing this while there are elements left in the array.*/

function minSum(arr) {
    //creating a variable to hold the result
    let sum = 0;
    //sorting from the min to max
    let array = [...arr].sort((a, z) => a - z);
    //while the lenght of the variable is greater than zero, use pop() to get the last element and shift to get the first element, multiply both of them and add the result to the sum variable
    while (array.length) sum += array.pop() * array.shift();
    return sum;
  }
