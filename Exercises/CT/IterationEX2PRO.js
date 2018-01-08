/*
    global JSAV, window
    Written by Jieun Chon and Cliff Shaffer
*/

(function() {
  "use strict";

  var av, // The JSAV object
      array = [],
      priceBoxLabel,
      totalBoxLabel,
      priceBox,
      totalBox,
      labelLeft;

  var iterationEX2PRO = {
    userInput: null, // Boolean: Tells us if user ever did anything

    clickbox: function(){
      var newLabelLeft = labelLeft;
      if(this == priceBox || this == priceBoxLabel){
        var price = prompt("Please enter the current price.", "0");
        if(price != ""){
          priceBoxLabel.value(price);
          while(price >= 10){
            newLabelLeft -= 5.5;
            price /= 10;
          }
          priceBoxLabel.css({left: newLabelLeft});
        }
      } else {
        var total = prompt("Please enter the current total.", "0");
        if(total != ""){
          totalBoxLabel.value(total);
          while(total >= 10){
            newLabelLeft -= 5.5;
            total /= 10;
          }
          totalBoxLabel.css({left: newLabelLeft});
        }
      }
    },


      // Reinitialize the exercise.
    reset: function() {
      // Reset the value of global variables.
      iterationEX2PRO.userInput = false;

      // Clear the old JSAV canvas.
      if ($("#IterationEX2PRO")) { $("#IterationEX2PRO").empty(); }

      // Set up the display
      av = new JSAV("IterationEX2PRO");


// --------------- Create random array ----------------

    //array size will be very from 3 to 5
      var arraySize = Math.floor(Math.random() * 2) + 3;
      for(var i = 0; i < arraySize; i++){ // Give random numbers in range 1..20
          array[i] = Math.floor(Math.random() * 20) + 1;
      }


      var leftMargin = 280,
          topMargin = 20,
          rect_left = leftMargin - 150,
          rect_top = topMargin + 40,
          topMargin = rect_top + 20;

      var nodegap = 40;


      // blue boxes, floor 1
      var topblue = av.g.rect(rect_left, rect_top - 40, 280, 35, 10).addClass("bluebox");
      var botblue = av.g.rect(rect_left, rect_top - 40 + 295, 280, 35, 10).addClass("bluebox");

      // floor 2
      av.g.rect(rect_left, rect_top, 250, 35, 10).addClass("box");
      av.g.rect(rect_left, rect_top + 20, 50, 15).addClass("box"); // for no-roung on the corner

      //floor 3 and the JSAV array contains array
      av.g.rect(rect_left, rect_top + 25, 30, 60, 10).addClass("box").css({opacity: 0.7});
      av.g.rect(rect_left + 73, rect_top + 25, 30, 60, 10).addClass("box").css({opacity: 0.9});
      var arr = av.ds.array(array, {indexed: false, left: leftMargin, top: topMargin, position: "absolute"});

      //floor 4, long purple
      av.g.rect(rect_left, rect_top + 76, 300, 30, 10).addClass("box");

      //floor 5, left big purple box
      av.g.rect(rect_left, rect_top + 80, 110, 170, 10).addClass("box");
      av.g.rect(rect_left, rect_top + 76, 50, 15).addClass("box");

      //mid blue/calculate boxes ( and "set total = ..." blue box )
      var midblue1 = av.g.rect(rect_left + 130, rect_top + 120, 130, 66, 10).addClass("bluebox");
      var midblue2 = av.g.rect(rect_left + 205, rect_top + 139, 20, 32, 15).addClass("calbox");
      var midblue3 = av.g.rect(rect_left + 220, rect_top + 120, 100, 66, 10).addClass("calbox");

      // last purple floor
      av.g.rect(rect_left + 90, rect_top + 200, 240, 50, 10).addClass("box");

      // ------------------ labels ------------------------

        var initlabel = av.label("set total = 0", {left: rect_left + 5, top: rect_top - 58});
        initlabel.addClass("labels").addClass("midlabel");

        var label1 = av.label("for each item", {left: rect_left + 5, top: rect_top - 20});
        label1.addClass("labels");

        var label2 = av.label("price", {left: rect_left + 22, top: rect_top + 50});
        label2.addClass("labels");

        var label3 = av.label("do", {left: rect_left + 35, top: rect_top + 100});
        label3.addClass("labels");

        var pricelabel = av.label("set total = total + price", {left: rect_left + 140, top: rect_top + 123});
        pricelabel.addClass("labels");
        pricelabel.addClass("smalllabel");

        var valuelabel = av.label("", {left: rect_left + 390, top: rect_top + 111});
        valuelabel.addClass("labels");
        valuelabel.addClass("valuelabel");

      // ------------------ red boxes ------------------------
        // var box1 = av.g.rect(rect_left, rect_top - 40, 280, 35).addClass("redbox");
        var box2 = av.g.rect(rect_left, rect_top, 300, 105).addClass("redbox");
        var box3 = av.g.rect(rect_left, rect_top, 300, 105).addClass("redbox");

// --------------- Move array to the right position
      var nextleft = leftMargin; // 120 to the right
      var nodegap = 40;

      arr.css({left: nextleft});
      av.displayInit();
      av.recorded();

    },

    // Initialise the exercise
    initJSAV: function() {
      iterationEX2PRO.reset();

      // Set up handler for reset button
      $("#reset").click(function() {
        iterationEX2PRO.reset();
      });
    },

    // Check user's answer for correctness: User's array must match answer
    checkAnswer: function() {
      return true;
    },
  };

  window.iterationEX2PRO = window.iterationEX2PRO || iterationEX2PRO;
}());
