

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){  
  this.storage = {};  
  this.edges = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.storage[node] = true;
  this.edges[node] = {};
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return this.storage[node];
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  this.storage[node] = false;
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return !!this.edges[fromNode][toNode];
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode][toNode] = true;
  this.edges[toNode][fromNode] = true;
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  this.edges[fromNode][toNode] = false;
  this.edges[toNode][fromNode] = false;
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addnode:constant O(1)
 removenode: constant O(1)
 contains: constant O(1)
 addEdge: constant O(1)
 hasEdge: constant O(n)
 removeEdge: constant O(1)
 forEachNode: linear O(n)
 */



