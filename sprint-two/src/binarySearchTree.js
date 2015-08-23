var BinarySearchTree = function(value){
  //Object.create(binaryMethods)
  var binaryTree = Object.create(binaryMethods);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

//create a methods object
var binaryMethods = {};

binaryMethods.insert = function(value) {
  //check to see if the value if less than object.value
  if(value < this.value) {
    //if it is less that object that value insert left
    // this.left = BinarySearchTree(value);
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    else {
      this.left.insert(value);
    }
  }

  if(value > this.value) {
    //if it is less that object that value insert left
    // this.left = BinarySearchTree(value);
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    else {
      this.right.insert(value);
    }
  }
};

binaryMethods.contains = function(target) {
  //check at the current node to see if this the target
  if (this.value === target) {
    return true;
  }
  //Recursively check smaller value at the  left nodes and larger values at the right node to see if target present
  if (target < this.value && this.left) {
    return this.left.contains(target);
  }
  if (target > this.value && this.right) {
    return this.right.contains(target);
  }
  return false;
};

binaryMethods.depthFirstLog = function(callback) {
  //callback(this.value)
  callback(this.value);
  //check to see if left child exists
  if (this.left) {
     //Recursivly leftchild(callback)
    this.left.depthFirstLog(callback);
    }
  //check to see if right child exists
    //Recursively rightchild(callback)
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert-linear O(n)
 contains-linear O(n)
 depthFirstLog-linear O(n)
 */
