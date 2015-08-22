var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //create an obj refring to the queueMethods
  var obj = Object.create(queueMethods);
  obj.beginning = 0;
  obj.end = 0;
  //add storage object
  obj.storage = {};
  //return obj
  return obj;
};

var queueMethods = {
  //add size, enqueue, dequeue
  size: function() {
    return this.end - this.beginning;
  },
  enqueue: function(myInput) {
    this.storage[this.end] = myInput;
    this.end++;
  },
  dequeue: function() {
    if(this.beginning < this.end) {
      var result = this.storage[this.beginning];
      delete this.storage[this.beginning];
      this.beginning++;
      return result;
   }
  }
};


