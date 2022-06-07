/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

Use the arrow function and the filter method.
Check that each element in arr1 is not incluced in arr2*/

const arrayDiff = (arr1, arr2) => arr1.filter(item =>!arr2.includes(item))

