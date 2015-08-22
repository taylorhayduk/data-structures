var LinkedList = function(){
  var list = {};
  var headPos = 0;
  var tailPos = 0;
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){

    if(list.head === null){ 
      list.head = Node(value);
      list.tail = Node(value);
    } else {
      tailPos++;
    }
    list[tailPos] = Node(value);
    list.tail = list[tailPos];
    //change previous tails next value from null to pointer of currnt tail node
    if(tailPos > 0) {
      list[tailPos-1].next = tailPos;
    }
    list.head = list[headPos];
  };


  list.removeHead = function(){
    //console.log(list);
    var result = list[headPos].value;
    headPos = list[headPos].next;
    list.head = list[headPos];
    // console.log(list[headPos].value);
    return result;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = list[currentNode.next];
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 

//  var LinkedList = function(){
//   var list = {};
 
//   list.head = null;
//   list.tail = null;

//  list.addToTail = function(value){
//   if(!list.head) {
//     list.head = Node(value);    
//     list.tail = Node(value);
//     list.head.next = list.tail
//     }
//     else {
//     list.tail.next = Node(value);
//     list.tail = Node(value);
// console.log(list);
//     }
// list.removeHead = function(){
    //console.log(list);
    // var result = list.head.value;
    // list.head = list.head.next;
    // list.head = list[headPos];
    // console.log(list[headPos].value);
    // return result;
  // };
// };


// };