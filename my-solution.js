const binarySearchRotated = (arr, key, min, max) => {
  
  let midIndex = 0;
  
  if(typeof max == "undefined" && typeof min == "undefined"){
    min = 0;
    max = arr.length-1;
    midIndex = Math.floor(arr.length/2)
  }
  else {
    // New size of the virtual array = (max-min)+1
    let new_array_size = (max - min) + 1;
    midIndex = min + Math.floor(new_array_size/2);
  }
  if (min == max)
    return arr[max] == key ? max : -1
  // Process right side of the array
  if(arr[midIndex] <= key && arr[max] >= key){
    return binarySearchRotated(arr,key,midIndex,max)
  } 
  // Process left side of the array
  else{
   return binarySearchRotated(arr,key, min, midIndex-1)
  }
};

console.log(binarySearchRotated([4,5,6,1,2,3],1))
