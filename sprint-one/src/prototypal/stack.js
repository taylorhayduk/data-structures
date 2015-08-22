var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // recreate obj variable that points to stackMethod
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};
  return obj;
};

var stackMethods = {
  // create 3 keys: pop, push, size
  size: function(){return this.count;},
  push: function(myInput){
    this.storage[this.count] = myInput;
    this.count++;
  },
  pop: function(){
    if(this.count>0){
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    }
  }
};


