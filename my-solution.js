const max_sub_array_of_size_k = function (K, arr) {
    // TODO: Write your code here

    // Find sum of the first K elements
    let maxSum = arr.slice(0, K).reduce((a, b) => a + b);
    let sumTemp = maxSum
    console.log("Init Max Sum", maxSum)

    for (let i = 0; i < arr.length - K; i++) {
        sumTemp = sumTemp - arr[i];
        sumTemp = sumTemp + arr[K+i]

        console.log("Temp Max Sum", sumTemp)
        if (sumTemp > maxSum) maxSum = sumTemp
    }

    return maxSum;
};



console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(4, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(4, [2, 3, 4, 1, 5])}`);