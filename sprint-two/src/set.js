var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //check to see if item already present
  if (!this._storage[item]) {
    //if not present, then add the item to storage object
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  //check to see if the storage object contains the key item
  return !!this._storage[item];
    //if it does return true || return false
};

setPrototype.remove = function(item){
  // Don't need to check if item exists to delete it
  //if (this.contains(item)) {
    delete this._storage[item];
 // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 add, contains, remove: Constant O(1)
 */
