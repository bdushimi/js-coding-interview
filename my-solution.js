const findSumOfTree = (nums, target) => {

    //First sort the array in ascending order
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let low = i + 1
        let high = nums.length - 1

        while (low < high) {
            let tempTarget = nums[i] + nums[low] + nums[high]
            if (tempTarget == target) {
                return true
            } else if (tempTarget > target) {
                high--
            } else if (tempTarget < target) {
                low++
            }
        }
    }

    return false

}

console.log(findSumOfTree([3, 5, 20, 10, 5, 5, 8, 9, -2], 7))