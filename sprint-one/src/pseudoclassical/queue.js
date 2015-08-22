var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // add lots of this 
  this.end = 0;
  this.beginning = 0;
  this.storage = {};
};

//create a prototype of Queue
Queue.prototype.size = function(){return this.end-this.beginning;};
Queue.prototype.enqueue = function(myInput){
  this.storage[this.end] = myInput;
  this.end++;
}
Queue.prototype.dequeue = function(){
  if(this.beginning < this.end) {
    var result = this.storage[this.beginning];
    delete this.storage[this.beginning];
    this.beginning++;
    return result;
  }
}