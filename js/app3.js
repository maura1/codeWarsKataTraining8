/* Given an array that contains a number of true and false elments
   true stands for one sheep ,false in none.
   The requirement is to count the number of sheep in the array

   eg: [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true] should return 17 */

//First check if the input is not an array or if the array is empty,then
//use filter function can be uses for this,
//then use lenght to find the total number of trues in the array
const countSheeps = (arr) =>
    !arr || arr.lenght === 0 ? 0 : arr.filter((x) => x === true).length;
console.log(
    countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true
    ])
);

//This can be shortened using Boolean
const countSheeps1 = (arr) =>
    !arr || arr.lenght === 0 ? 0 : arr.filter(Boolean).length;

//Using a function and the for loop
function countSheeps(arrayOfSheep) {
    let total = 0;

    for (var i = 0; i < arrayOfSheep.length; i++)
        if (arrayOfSheep[i] == true) total++;

    return total;
}
