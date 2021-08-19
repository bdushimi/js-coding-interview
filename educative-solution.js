/*
Description #
Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not.

Consider this array and the target sums:

*/


/*
Runtime complexity #
The runtime complexity of this solution is linear, O(n)O(n).

Memory complexity #
The memory complexity of this solution is linear, O(n)O(n).

In this solution, we’ll use the following algorithm to find a pair that add up to the target (say val).

Scan the whole array once and store visited elements in a hash set.
During scan, for every element e in the array, we check if val - e is present in the hash set i.e. val - e is already visited.
If val - e is found in the hash set, it means there is a pair (e, val - e) in array whose sum is equal to the given val.
If we have exhausted all elements in the array and didn’t find any such pair, the function will return false.
*/


let findSumOfTwo = function (A, val) {
    let foundValues = new Set();
    for (let a in A) {
        if (foundValues.has(val - A[a])) {
            return true;
        }

        foundValues.add(A[a]);
    }

    return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
    let output = findSumOfTwo(v, test[i]);
    console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
}