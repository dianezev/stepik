//Homework Studio 1 for Diane Zevenbergen

//Set L to 0 and R to n − 1.
//If L > R, the search terminates as unsuccessful, return -1.
//Set m (the position of the middle element) to the floor (the largest previous integer) of (L + R) / 2.
//Print m
//If Am < T, set L to m + 1 and go to step 2.
//If Am > T, set R to m − 1 and go to step 2.
//Now Am = T, the search is done; return m.


function binary_search(lst, item) {
  var l = 0;
  var r = lst.length - 1;

  return(compareElements(l, r));  
  
  function compareElements(l, r) {
    var m;

    if (l > r) {
      return -1;
      
    } else {
      m = Math.floor((l + r) / 2);
      console.log(m);

      if (lst[m] < item) {
        l = m + 1;
        return compareElements (l, r);
        
      } else if (lst[m] > item) {
        r = m - 1;
        return compareElements (l, r);
        
      } else {
        return m;
      }
    }
  }
}

binary_search([28,35,42,48,56,85],56);
