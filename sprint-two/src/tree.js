var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  //target has to be compared to "this"(value), and if there--->return 
  if(this.value === target) {
    return true;
  }
  //for loop that traverses the "this's" childhren: RECURSIVELY
  for(var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)){
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
