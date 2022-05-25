function find_averages_of_subarrays(K, arr) {
    const result = [];

    // Get the sum of the first K elements
    let sum = arr.slice(0, K).reduce((a, b) => a + b)

    // Push the first results
    result.push(sum / K)

    for (let i = 0; i < arr.length - K; i++) {
        sum = sum - arr[i];
        sum = sum + arr[i + K]
        result.push(sum / K); // calculate average
    }

    return result;
}


const result = find_averages_of_subarrays(6, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);