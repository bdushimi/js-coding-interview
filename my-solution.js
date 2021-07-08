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
    let keyIndex = findKeyIndex(arr,key);
    
    if(keyIndex === -1)
      return -1;
    else {
      if(keyIndex === 0)
        return 0;
        let lowIndex = keyIndex -1;
        while(arr[keyIndex] === arr[lowIndex] && lowIndex >= 0) {
          lowIndex -= 1;
        }
        return lowIndex+1;
    }
  };
  
  let findHighIndex = function(arr, key) {
    let keyIndex = findKeyIndex(arr,key);
    
    if(keyIndex === -1)
      return -1;
    else {
      if(keyIndex === 0)
        return 0;
      
      if(keyIndex == arr.length-1)
        return keyIndex;
      
        let highIndex = keyIndex + 1;
        while(highIndex <= arr.length-1 && arr[keyIndex] === arr[highIndex]) {
          highIndex += 1;
        }
        return highIndex-1;
    }
  };
  
  // Search the element using binary search algorithm
  // Return the element index
  // If the element is not found, return -1
  let findKeyIndex = (arr, key) => {
    let min = 0;
    let max = arr.length-1;
    let midIndex = Math.floor(arr.length/2)
    
    while (min < max){
      
      console.log("min",min, "max",max, "midindex", midIndex);
      if (arr[midIndex] == key)
        return midIndex;
      
      if( arr[midIndex] > key){
        max = midIndex -1;
        let new_array_size = (max - min) + 1;
        midIndex = min + Math.floor(new_array_size/2);
      }
      
      if( arr[midIndex] < key){
       min = midIndex + 1;
       let new_array_size = (max - min) + 1;
       midIndex = min + Math.floor(new_array_size/2);
      }
    }
    
    return -1
  }
  
  console.log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6],5))
  