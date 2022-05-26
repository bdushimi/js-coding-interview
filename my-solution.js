const smallest_subarray_sum = function (s, arr) {
    // TODO: Write your code here
    let tempSum = 0;
    let windowStart = 0;
    let windowEnd = 1;
    let minWindowSize = 9000;
    let tempMinSize = 1;


    while (windowEnd <= arr.length) {

        let tempArr = arr.slice(windowStart, windowEnd + 1);
        tempSum = tempArr.reduce((a, b) => a + b);

        if (tempSum >= s) {

            // Get the size of the tempArr
            tempMinSize = tempArr.length;

            // Check if the current tempArr is or equal to the min. Update if so
            if (tempMinSize <= minWindowSize) {
                minWindowSize = tempMinSize
            }

            windowStart++
            windowEnd = windowStart;
        }
        windowEnd++
    }
    return minWindowSize;
};

console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);