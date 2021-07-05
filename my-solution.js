/*
Solution #
Runtime complexity #
The runtime complexity of the solution is linear, O(n).

Memory complexity #
The memory complexity of the solution is constant, O(1).
*/

const findLeastCommonNumber = (a,b,c) => {
  
    let a_p = 0;
    let b_p = 0;
    let c_p = 0;
    
    let counter = 0;
    
    while (counter < a.length || counter < b.length || counter < c.length){
      if(a[a_p] == b[b_p] && b[b_p] == c[c_p]){
        return a[a_p];
      }
      
      if (a[a_p] <= b[b_p] && a[a_p] <= c[c_p]){
        if(a_p < a.length)
          a_p++;
        
        if(a[a_p] == b[b_p] && b[b_p] == c[c_p]){
        return a[a_p];
      }
      }
      
      if (b[b_p] <= a[a_p] && b[b_p] <= c[c_p]){
        if(b_p < b.length)
          b_p++;
        
        if(a[a_p] == b[b_p] && b[b_p] == c[c_p]){
        return a[a_p];
      }
      }
      
      if (c[c_p] <= a[a_p] && c[c_p] <= b[b_p]){
        if(c_p < c.length)
          c_p++;
        
        if(a[a_p] == b[b_p] && b[b_p] == c[c_p]){
        return a[a_p];
      }
      }
      
      counter++;
    }
      
    return -1;
  }