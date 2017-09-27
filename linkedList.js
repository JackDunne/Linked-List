const Node = require('./node.js');

const LinkedList = function(){
  let root = new Node(udefined);
  let length = 0;
  let lastnode = root;
}

function has(node){
  let start = root;
  for(let x = 0;x<length;x++){
    if(start.getValue() == node.getValue()){
      return true;
    }
    else{
      start = start.getNext();
    }
  }
  return false;
}

function add(node){
  lastnode.setNext(node);
  lastnode = node;
}

function remove(node){
  let temp = new Node(undefined);
  let start = root;
  let last;
  while(start.getValue() != node.getValue()){
    last = start;
    start = start.getNext();
  }
  temp.setValue(start.getNext().getValue());
  temp.setNext(start.getNext().getNext());

  last.setNext(temp);
}
