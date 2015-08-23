var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // set v to this._storage at position i
  // this._storage[i] = v;
  var added = false;
  if(this._storage[i] === undefined) {
    this._storage[i] = [k,v];
    added = true;
  } else {
    // check to see if k is already in the bucket, if so, change next value to v
    for(var evens = 0; evens < this._storage[i].length; evens+=2) {
      if(this._storage[i][evens] === k) {
        this._storage[i][evens+1] = v;
        added = true;
      }
    }    
  }
  if(!added) {
      this._storage[i].push(k);
      this._storage[i].push(v); 
    }   
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // set a variable to hold the bucket
  var bucket = this._storage[i];
  // loop through even indexes in bucket
  for(var j = 0; j < bucket.length; j+=2) {
   // if the item at the even index (which would be a key) = k
   if(bucket[j] === k) {
     // return the element at pos i+1
     return bucket[j+1];
   }
  }
  //return undefined;
  return null;   
};

HashTable.prototype.remove = function(k){
  // set a variable called i by calling getIndexBelowMaxForKey passing in k and this._limit
  // set this._storage at position i to equal undefined
  var i = getIndexBelowMaxForKey(k, this._limit);
  for(var evens = 0; evens < this._storage[i].length; evens+=2) {
    if(this._storage[i][evens] === k) {
      this._storage[i][evens + 1] = null; 
    }
  }
 };


/*
 * Complexity: What is the time complexity of the above functions?
 insertion: average constant, worse linear O(n)
 remove: average constant, worse linear O(n)
 search: average constant, worse linear O(n)
 */
