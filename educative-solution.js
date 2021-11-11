// First Approach
// Assume if S represents the total sum of all the given numbers, 
// then the two equal subsets must have a sum equal to S / 2. 
// This essentially transforms our problem to: 
// "Find a subset of the given numbers that has a total sum of S/2".

let canPartition = function (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) sum += num[i];

    // if 'sum' is a an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false;

    return canPartitionRecursive(num, sum / 2, 0);
};

function canPartitionRecursive(num, sum, currentIndex) {
    // base check
    if (sum === 0) return true;

    if (num.length === 0 || currentIndex >= num.length) return false;

    // recursive call after choosing the number at the currentIndex
    // if the number at currentIndex exceeds the sum, we shouldn't process this
    if (num[currentIndex] <= sum) {
        if (canPartitionRecursive(num, sum - num[currentIndex], currentIndex + 1)) return true;
    }

    // recursive call after excluding the number at the currentIndex
    return canPartitionRecursive(num, sum, currentIndex + 1);
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);


// Top - down Dynamic Programming with Memoization #
// We can use memoization to overcome the overlapping sub - problems.
// As stated in previous lessons, memoization is when we store the results
//  of all the previously solved sub - problems return the results from memory 
// if we encounter a problem that has already been solved.

// Since we need to store the results for every subset and for every possible sum, 
// therefore we will be using a two - dimensional array to store the results of the solved sub - problems.
// The first dimension of the array will represent different subsets and the second dimension will 
// represent different ‘sums’ that we can calculate from each subset.
// These two dimensions of the array can also be inferred from 
// the two changing values(sum and currentIndex) in our recursive function canPartitionRecursive().

let canPartition = function (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) sum += num[i];

    // if 'sum' is a an odd number, we can't have two subsets with equal sum
    if (sum % 2 !== 0) return false;

    const dp = [];
    return canPartitionRecursive(dp, num, sum / 2, 0);
};

function canPartitionRecursive(dp, num, sum, currentIndex) {
    // base check
    if (sum === 0) return true;

    if (num.length === 0 || currentIndex >= num.length) return false;

    dp[currentIndex] = dp[currentIndex] || [];
    // if we have not already processed a similar problem
    if (typeof dp[currentIndex][sum] === 'undefined') {
        // recursive call after choosing the number at the currentIndex
        // if the number at currentIndex exceeds the sum, we shouldn't process this
        if (num[currentIndex] <= sum) {
            if (canPartitionRecursive(dp, num, sum - num[currentIndex], currentIndex + 1)) {
                dp[currentIndex][sum] = true;
                return true;
            }
        }

        // recursive call after excluding the number at the currentIndex
        dp[currentIndex][sum] = canPartitionRecursive(dp, num, sum, currentIndex + 1);
    }
    return dp[currentIndex][sum];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);