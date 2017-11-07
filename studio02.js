//Studio 2
//
//def binary_search(lst, el):
//    left = 0
//    right = len(lst) - 1
//    found_at = -1
//        
//    while left <= right and found_at == -1:
//        midpoint = (left + right) // 2
//        if lst[midpoint] == el:
//            found_at = midpoint
//        else:
//            if el < lst[midpoint]:
//                right = midpoint - 1
//            else:
//                left = midpoint + 1
//        
//    return found_at


function binary_search(lst, item, offset) {
  var m;
  var l = 0;
  var r = lst.length - 1;

  offset = (typeof offset === "undefined") ? 0 : offset;

  if (l > r) {
    return -1;

  } else {
    m = Math.floor((l + r) / 2);

	if (lst[m] === item) {
		return m + offset;
		
	} else {
		  
		if (lst[m] < item) {
		  l = m + 1;
		  offset += l;
			
		} else if (lst[m] > item) {
		  r = m - 1;
		}
		return binary_search(lst.slice(l, r + 1), item, offset);
	}
  }
}

binary_search([2,8,18,19,23,28,30,30,35,48,55,66,76,82,87,91,94], 82);