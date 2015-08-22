var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // call the queue methods here
  var obj = {
    beginning: 0,
    end: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  // we need enqueue, dequeue, size
  size: function(){return this.end-this.beginning},
  enqueue: function(arg1){
    this.storage[this.end] = arg1;
    this.end++;
  },
  dequeue: function(){
    if(this.beginning < this.end){
      var result = this.storage[this.beginning];
      delete this.storage[this.beginning];
      this.beginning++;
      return result;
    }
  }
};


