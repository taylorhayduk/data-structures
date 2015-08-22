var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    count: 0,
    storage: {}
  };

  //call the method stackMethods here
  _.extend(obj, stackMethods);
  return obj;
};


//We need to create a method
var stackMethods = {
  //you write all methods: push, pop, size
  
  size: function() { return this.count; },
  push: function(myInput) {
    this.storage[this.count] = myInput;
    this.count = this.count + 1; 
  },
  pop: function() {
    if(this.count>0){
      this.count--;
    }
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
};


