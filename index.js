$(document).ready(function(){

      var letter = document.getElementById("letter");
      var img = document.createElement("img");

      Leap.loop(function (frame) {
        // output.innerHTML = 'Frame: ' + frame.id
        // hands.innerHTML = 'Hands:' + frame.hands.length;
        // pointables.innerHTML = 'Pointables:' + frame.pointables;

        if(frame.hands.length > 0){
          var hand = frame.hands[0];

          var crossProduct = Leap.vec3.create();
          var direction = frame.hands[0].direction;
          var normal = frame.hands[0].palmNormal;

          Leap.vec3.cross(crossProduct, direction, normal);

          for(var i = 0; i < hand.fingers.length; i++){

            // ------------ LETTER D -----------------
            if(hand.fingers[1].extended && !hand.fingers[0].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
              img.src = 'images/LETTERS2/letterDNew.png'
              letter.appendChild(img)

            // ------------ LETTER A ------------------
            }else if(hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
              img.src = 'images/LETTERS2/letterANew.png'
              letter.appendChild(img)

              // ------------ LETTER B ------------------
            }else if(!hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
              img.src = 'images/LETTERS2/letterBNew.png'
              letter.appendChild(img)

              // ------------ LETTER F ------------------
            }else if(!hand.fingers[0].extended && !hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
              img.src = 'images/LETTERS2/letterFNew.png'
              letter.appendChild(img)

              // ------------ LETTER I ------------------
            }else if(!hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && hand.fingers[4].extended){
              img.src = 'images/LETTERS2/letterINew.png'
              letter.appendChild(img)
            }

            // ---------------- LETTER C --------- //
            else if((Leap.vec3.cross(crossProduct, direction, normal)[0] > 0) && frame.hands[0].fingers[4].extended){
              // console.log('hand sideways');
              // console.log('letter C');
              img.src = 'images/LETTERS2/letterCNew.png'
              letter.appendChild(img)
            }else {
              letter.innerHTML = ""
            }
          }
        }
      });

});