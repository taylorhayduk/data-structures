var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Stack.prototype.size = function() { return this.count; };
Stack.prototype.push = function(myInput) { 
  this.storage[this.count] = myInput;
  this.count++;
};
Stack.prototype.pop = function() { 
  if(this.count > 0) {
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
 }
};