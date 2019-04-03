$(document).ready(function() {
"use strict";

(function () {
  var av = new JSAV("tree");

  var msg = [
    "Example Tree"
  ];


  function step(skip_message, init) {
    if (!skip_message) {
      av.umsg(msg.shift());
    }
    if (init) {
      av.displayInit();
    } else {
      av.step();
    }
  }

  var t = BPTree.newTree(av, 3, null);

  t.add(12, "T");
  step(false, true);
  t.add(13, "K");
  step();
  t.add(14, "E");
  step();
  t.add(23, "Q");
  step();
  t.add(5, "F");
  step();
  t.add(100, "B");
  step();
  t.add(20, "J");
  step();
  t.add(37, "N");
  step()
  t.delete(5);
  step();
  t.delete(23);
  step();
  t.delete(37);
  step();
  t.add(120, "Y");
  step();
  t.add(1000, "B");
  step();
  t.add(230, "A");
  step();
  t.add(222, "F");
  step();
  t.add(111, "O");
  step();
  t.add(225, "M");
  step();
  t.add(226, "L");
  step();
  t.delete(120);
// t.printTree();
// step();

  //var n11 = BPTreeNode.newNode(third1, av, 4, false);
  //var t = BPTree.newTree(av, 4);
  //console.log(t);
  //t.tempAdd();
  av.recorded();

}());

});
