// Naive solution using built-in find function
// const find_missing_number = function (nums) {
//     // TODO: Write your code here
//     for (let i = 0; i < nums.length; i++) {

//         let num = nums.find(e => e == i)
//         if (num === undefined)
//             return i
//     }
//     return -1;
// };



const find_missing_number = function (nums) {
    // TODO: Write your code here
    let i = 0;
    while (i <= nums.length) {
        //actual number
        const n = nums[i]

        // if n == i, this means that the number is not missing && is the right place, then do nothing.
        // if n != i,  this means that the number is not missing && is not in the right place, then swap

        if (n != i) {
            if (n == nums.length) {
                // do nothing
            } else {
                // i=0, n=1
                tempNumber = nums[n]
                nums[i] = tempNumber
                nums[n] = n
            }
        } else { 
            i++ 
        }
    }

    console.log(nums)

    return -1;
};
