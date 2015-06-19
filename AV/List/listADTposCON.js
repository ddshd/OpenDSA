/*global ODSA */
"use strict";
// Written by Jun Yang and Cliff Shaffer
//Possible positions for Array-Based list
$(document).ready(function () {
  var av_name = "listADTposCON";
  var interpret = ODSA.UTILS.loadConfig({"av_name": av_name}).interpreter;
  var jsav = new JSAV(av_name);
  var arrPositions = [" ", 5, 7, 3, 9, " "];

  //calculate left margin for the JSAV array object
  var canvasWidth = $(".jsavcanvas").width();
  var arrWidth3 = arrPositions.length * 65;
  var leftMargin3 = (canvasWidth - arrWidth3) / 2;
  var i;
  var arrowArray = [];
  var arr = jsav.ds.array(arrPositions,
                          {indexed: false, layout: 'array'}).hide();

  // Slide 1
  jsav.umsg(interpret("av_c1"));
  jsav.displayInit();

  // Slide 2
  arr.show();
  for (i = 0; i < 5; i++) {
    arrowArray[i] = jsav.g.line(leftMargin3 + 75 + 60 * i, 0,
                                leftMargin3 + 75 + 60 * i, 25,
                                {"arrow-end": "classic-wide-long",
                                 "opacity": 0, "stroke-width": 2});
  }
  jsav.umsg(interpret("av_c2"));
  jsav.step();

  // Slide 3
  for (i = 0; i < 5; i++) {
    arrowArray[i].show();
  }
  jsav.umsg(interpret("av_c3"));
  jsav.recorded();
});
