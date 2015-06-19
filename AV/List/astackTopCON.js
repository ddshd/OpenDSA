/*global ODSA */
"use strict";
// Explain why sets top at position n-1.
$(document).ready(function () {
  var av_name = "astackTopCON";
  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig({"av_name": av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);

  // Relative offsets
  var leftMargin = 300;
  var topMargin = 35;

  var arr = av.ds.array([12, 45, 5, 81, "", "", "", ""],
                        {indexed: true, top: topMargin, left: leftMargin});

  // Vertical arrows
  var arrow1_x = leftMargin + 17;
  var arrow1 = av.g.line(arrow1_x, 30, arrow1_x, 50,
                         {"arrow-end": "classic-wide-long",
                          "opacity": 100, "stroke-width": 2 });

  var arrow2_x = leftMargin + 107;
  var arrow2 = av.g.line(arrow2_x, 30, arrow2_x, 50,
                         {"arrow-end": "classic-wide-long",
                          "opacity": 100, "stroke-width": 2 });
  arrow2.hide();

  var arrow3_x = leftMargin + 77;
  var arrow3 = av.g.line(arrow3_x, 30, arrow3_x, 50,
                         {"arrow-end": "classic-wide-long",
                          "opacity": 100, "stroke-width": 2 });
  arrow3.hide();

  // Interface for the alternative "top" representation
  var topArr = av.ds.array([0], {top: topMargin, left: leftMargin - 100});
  var topLabel = av.label("top", {left: leftMargin - 130, top: topMargin + 5});

  // Slide 1
  arr.highlight(0);
  arr.addClass([4, 5, 6, 7], "unused");
  av.umsg(interpret("av_c1"));
  av.displayInit();

  // Slide 2
  arr.highlight([1, 2, 3]);
  av.umsg(interpret("av_c2"));
  av.step();

  // Slide 3
  arr.unhighlight([0, 1, 2]);
  arrow1.hide();
  arrow2.show();
  topArr.value(0, 3);
  av.umsg(interpret("av_c3"));
  av.step();

  // Slide 4
  arr.value(3, "");
  arr.addClass(3, "unused");
  arr.unhighlight(3);
  arrow2.hide();
  arrow3.show();
  topArr.value(0, 2);
  av.umsg(interpret("av_c4"));
  av.step();

  // Slide 5
  arr.value(0, "");
  arr.value(1, "");
  arr.value(2, "");
  arr.addClass([0, 1, 2], "unused");
  arrow3.hide();
  arrow1.show();
  topArr.value(0, 0);
  arr.highlight(0);
  av.umsg(interpret("av_c5"));
  av.step();

  // Slide 6
  arr.unhighlight(0);
  topArr.value(0, -1);
  arr.unhighlight(0);
  av.umsg(interpret("av_c6"));
  av.recorded();
});
