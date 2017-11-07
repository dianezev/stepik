//The implementation of a binary search tree can be implemented using a Node class, which has a value, along with left and right children. Then, a tree can be thought of simply as a reference to the root node, and we don't need a separate class to represent a binary search tree (as long the Node class has search, insert, and any other required methods).
//
//In this way, we can consider every single node as a tree. The child nodes of the root node represent the subtrees consisting of all nodes below the given children, and so on. This approach also leads to some clean recursive algorithms for Node methods, like search and insert.
//
//We've provided you with a partial Node class, with insert and search methods. Your task is to implement the method print, which should print each value in a tree/node in order. This will require you to traverse the tree using inorder traversal. If inorder traversal is fuzzy for you, go back to the first step in the previous lesson for a refresher.
//
//Be sure you understand the code that has been provided before starting on your print method.
//

//Sample Input:
//72,86,97,90,19,84,1,18

//Sample Output:
//1
//18
//19
//72
//84
//86
//90
//97

class Node {

    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (this.value === val) {
            return;
        } else if (val < this.value) {
            if (this.left === null) {
                this.left = new Node(val);
            } else {
                this.left.insert(val);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(val);
            } else {
                this.right.insert(val);
            }
        }
    }

    search(val) {
        if (this.value === val) {
            return true;
        } else if (val < this.value) {
            if (this.left !== null) {
                return this.left.search(val);
            } else {
                return false;
            }
        } else {
            if (this.right !== null) {
                return this.right.search(val);
            } else {
                return false;
            }
        }
    }

	// Diane note to self: I got stuck because I was trying to call print with
	// ' return this.left.print();' instead of just 'this.left.print();'
	// You need to return something if it's being used in a calc or building an array, list, etc
	// but that's not happening here...
    print() {
		
		if (this.left !== null) {
			this.left.print();
		}
		console.log(this.value);
		if (this.right !== null) {
			this.right.print();
		}
    }
}

function buildTree(arr) {
	var tree = new Node(arr[0]);
	
	for (var i = 1; i < arr.length ; i++) {
		tree.insert(arr[i]);
	}
	return tree;
}
var tree = (buildTree([72,86,97,90,19,84,1,18]));
console.log(tree);
tree.print();