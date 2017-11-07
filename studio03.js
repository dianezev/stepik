//Studio 3
//
//class Node:
//    def __init__(self, value, next = None):
//        self.value = value
//        self.next = next
//Sample Input:
//40 -> 62 -> 35 -> 66 -> 49 -> 52 -> 87 -> 15 -> 20 -> 9 -> . , 11
//Sample Output:
//None

//read (i) - given a location (an integer index), get the value of the node at the index
//insert (node, val) - given a piece of data, val, insert the data before the given node
//remove (node, index) - given a node, remove the node at the index from the list




// Question not sure if I should write function to create linked_list 
// from an array or just do something like this...

linked_list = {value: 40, next: 
			   {value:62, next: 
				{value:35, next:
				 {value:66, next:
				  {value:49, next:
				   {value:52, next:
					{value:87, next:
					 {value:15, next:
					  {value:20, next:
					   {value:9, next:
					   		null}}}}}}}}}};

function read(lst, index) {
	var result = "None";
	var ctr = 0;
	var curNode = lst;
	
	if (lst === null) {return "None"};
	
	while (curNode !== null) {
		
		if (ctr === index) {
			result = curNode.value;
			break;
		} else {
			ctr++;
			curNode = curNode.next;
		}
	}
	return result;
}

console.log(read(linked_list, 11));





linked_list = {value: 40, next: 
			   {value:62, next: 
				{value:35, next:
				 {value:66, next:
				  {value:49, next:
				   {value:52, next:
					{value:87, next:
					 {value:15, next:
					  {value:20, next:
					   {value:9, next:
					   		null}}}}}}}}}};

function Node(value, next) {
	this.value = value;
	this.next = (typeof next === "undefined") ? null : next;
}

function insert_at_beginning(lst, value) {
	
	var newList = new Node(value, lst);
	return newList;
}

console.log(insert_at_beginning(linked_list, 77));




linked_list = {value: 40, next: 
			   {value:62, next: 
				{value:35, next:
				 {value:66, next:
				  {value:49, next:
				   {value:52, next:
					{value:87, next:
					 {value:15, next:
					  {value:20, next:
					   {value:9, next:
					   		null}}}}}}}}}};

function delete_at_index(lst, index) {
//	var new_list = new Object;
	var ctr = 1;
	var prevNode;
	var curNode;
	var nextNode;

	// If lst is null, just return it
	if (lst === null) {return lst};
	
	// Note to self: could make a deep copy of lst to modify
	// if original linked_list should not be modified
	//new_list = JSON.parse(JSON.stringify(lst));
	// then replace 'lst' below with 'new_list'
	
	// Special case if removing 1st el from linked list
	if (index === 0) {
		lst = lst.next
	
	// Otherwise traverse through list & change pointer when you reach index
	} else {
		prevNode = lst;
		curNode = prevNode.next;

		while (curNode !== null) {
			nextNode = curNode.next;

			if (ctr === index) {
				
				// If next node is valid, point prev.next to next
				if (nextNode !== null) {
					prevNode.next = curNode.next;
					
				// Otherwise if deleting el at end of list, point
				// prev.next to null
				} else {
					prevNode.next = null;	
				}
				break;

			// Otherwise keep traversing til you get to index
			} else {
				ctr++;
				prevNode = curNode;
				curNode = nextNode;
			}
		}
	}
	
	return lst;
}
console.log(delete_at_index(linked_list, 2));

// this to show that original linked list wasn't changed
console.log(buildArray(linked_list));

function buildArray(obj) {
	var arr = [];
	var cur = obj;
	
	while ((cur !== null) && (cur.hasOwnProperty("value"))) {
		arr.push(cur.value);	 
		cur = cur.next;
	}
	return arr;
}