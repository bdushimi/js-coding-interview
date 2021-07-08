/**
 * 
 * Solution #
Runtime complexity #
The runtime complexity if this solution is linear, O(n)O(n).

Memory complexity #
The memory complexity of this solution is constant, O(1)O(1).
 */


let moveZerosToLeft = function(A) {
    let index_array = [];
    let zeros_count = 0;
    let write_index = 0;
    
    for (let i= A.length-1; i >= 0; i--){
      if(A[i] == 0){
        zeros_count += 1;
        index_array.push(i);
      }else {
        write_index = index_array.shift();
        if(write_index != undefined){
          A[write_index] = A[i];
          index_array.push(i);
        }
      }
    }
    for (let i = 0; i < zeros_count; i++){
      A[i] = 0;
    }
  };
  
  const A = [1,10,20,0,59,63,0,88,0];
  console.log("Before Transformaton")
  console.log(A)
  
  moveZerosToLeft(A)
  
  
  console.log("After Transformaton")
  console.log(A)