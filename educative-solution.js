/**
 * Solution #
Runtime complexity #
Since we are using binary search, the runtime complexity is logarithmic, O(logn)O(logn).

Even though we do the binary search twice, asymptotic runtime complexity is still O(logn)O(logn).

Memory complexity #
The memory complexity is constant, O(1)O(1) since no extra storage is being used.

Note: If the binary search was implemented recursively, there would be implicit O(logn)O(logn) memory usage on the function call stack. We, however, will be focusing on the iterative solution here.
 */

let findLowIndex = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
  
      let midElem = arr[mid];
  
      if (midElem < key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
    
    if (low < arr.length && arr[low] === key) {
      return low;
    }
  
    return -1;
  };
  
  let findHighIndex = function(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);
  
    while (low <= high) {
      let midElem = arr[mid];
  
      if (midElem <= key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
  
      mid = low + Math.floor((high - low) / 2);
    }
  
    if (high === -1){
      return high
    }
    
    if (high < arr.length && arr[high] === key) {
      return high;
    }
  
    return -1;
  };
  
  let array = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
  
  var key = 5;
  console.log("Low Index of " + key + ": " + (findLowIndex(array, key)));
  console.log("High Index of " + key + ": " + (findHighIndex(array, key)));
  
  key = -2;
  console.log("Low Index of " + key + ": " + (findLowIndex(array, key)));
  console.log("High Index of " + key + ": " + (findHighIndex(array, key)));