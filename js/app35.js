/* DESCRIPTIOn:

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;

*/

//USing the for loop we can iterate over each element, add the value of the element to the value of the following two 
//elements and pushing that on to the signature list.The length of the list is 'n', we are given the first three elements,
//so we should iterate 'n' - 3 times .


function tribonacci(signature,n){
  
    for(let i = 0; i < n-3; i++){
      signature.push(signature[i]+ signature[i+1] +signature[i+2])
    }
    return signature.slice(0,n)
  }

console.log(tribonacci([3,2,1],10))

//Using arrow function
//Ust the spread operator to create an array of length 'n' .Use the reduce method()first input the values of the array that are given, then for each following index  add the value of an element to the value of the next two elements , returning a list of all the elements which has a list of n
const tribonacci1 = (signature, n) => [...Array(n)].reduce((arr,_, idx)=>[...arr,arr[idx]+ arr[idx+1]+ arr[idx+2]],signature).slice(0,n);





