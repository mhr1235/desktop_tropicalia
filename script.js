/*    ___   ____
        /' --;^/ ,-_\     \ | /
       / / --o\ o-\ \\   --(_)--
      /-/-/|o|-|\-\\|\\   / | \
       '`  ` |-|   `` '
             |-|
             |-|O
             |-(\,__
          ...|-|\--,\_....
      ,;;;;;;;;;;;;;;;;;;;;;;;;,.
~~,;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,  ______   ---------   _____     ------ 
*/
/* _   .-')     ('-. .-. _  .-')                                               
( '.( OO )_  ( OO )  /( \( -O )                                              
 ,--.   ,--.),--. ,--. ,------.        .-----.   .----.   .-----.   .----.   
 |   `.'   | |  | |  | |   /`. '      / ,-.   \ /  ..  \ / ,-.   \ /  ..  \  
 |         | |   .|  | |  /  | |      '-'  |  |.  /  \  .'-'  |  |.  /  \  . 
 |  |'.'|  | |       | |  |_.' |         .'  / |  |  '  |   .'  / |  |  '  | 
 |  |   |  | |  .-.  | |  .  '.'       .'  /__ '  \  /  ' .'  /__ '  \  /  ' 
 |  |   |  | |  | |  | |  |\  \       |       | \  `'  / |       | \  `'  /  
 `--'   `--' `--' `--' `--' '--'      `-------'  `---''  `-------'  `---''  
*/

var parent = document.getElementById('container'); // Element that holds the mover
var mover = document.getElementById('mover'); // The mover, can be anything
var city = document.getElementById('city'); // The mover, can be anything

var dir = 1; // The direction we are moving... 1 is right, -1 is left.
var dist = 5; // The distance we move each "tick"
var timer = 0;

var dir2 = 1; // The direction we are moving... 1 is right, -1 is left.
var dist2 = 1;

var size = [window.width,window.height];  //public variable

$(window).resize(function(){
    window.resizeTo(size[0],size[1]);
});

$("body").css("overflow", "hidden");


// The ID will let us stop it later if we want.
var intervalId = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX = parseInt(mover.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX += dir * dist;
    
    // If we are moving right and we've gone over the right edge...
    if (dir == 1 && posX + mover.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX -= posX + mover.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir *= -1
        mover.src = "images/bird2.gif";
    // If we are moving left and we've gone over the left edge...
    } else if (dir == -1 && posX < 0) {
        // stop at zero...
        posX = 0;
        // and change direction...
        dir *= -1;
        mover.src = "images/bird1.gif";

    }
    
    // Set the new position
    mover.style.left = posX + "px";
}, 50); // this number is how many milliseconds in between each move.
// Smaller interval time means smoother movement but slower performance.
function tree_clicked(){


        tree.src = "images/3growtree.gif";
        setTimeout(treeDone,7300);

}
    




function treeDone(){
        tree.src = "images/1rotatetree.gif";

}



function clicked(){

     dir *= -1;

    if (mover.src.match("bird1")) {
    mover.src = "images/bird2.gif";
}else{
        mover.src = "images/bird1.gif";

}
    

}

function city_clicked(){

     dir2 *= -1;

    //console.log("clicked");
     if(document.getElementById("city").style.zIndex === "4"){
      document.getElementById("city").style.zIndex = "2";
      document.getElementById("city").style.top = "65%";
      document.getElementById("city").style.width = "14%";

   } else{
          document.getElementById("city").style.zIndex = "4";
          document.getElementById("city").style.top = "70%";
          document.getElementById("city").style.width = "15%";



   }


}

 //$("#oceanfront1").click(function(){
 
 /*$("#dolphin").animate ({

  top: "20%",
  left: "60%",
  }, 333);*/

  /*$("#dolphin").css ({

  "transform": "rotate(45deg)"
  });*/

  /* $("#dolphin").animate ({

  top: "80%",
    left: "70%",
  });*/
   

  

  //});

//   function getRandomPosition(element) {
//   var x = document.body.offsetHeight-element.clientHeight;
//   var y = document.body.offsetWidth-element.clientWidth;
//   var randomX = Math.floor(Math.random()*x);
//   var randomY = Math.floor(Math.random()*y);
//   return [randomX,randomY];
// }
// window.onload = function() {
//   var img = document.createElement('img');
//   img.setAttribute("style", "position:absolute;");
//   img.setAttribute("src", "some-image.jpg");
//   document.body.appendChild(img);
//   var xy = getRandomPosition(img);
//   img.style.top = xy[0] + 'px';
//   img.style.left = xy[1] + 'px';
// }
 $("#oceanfront2").click(function(){
  var x = document.body.offsetHeight;
  var y = document.body.offsetWidth;
  var randomX = Math.floor(Math.random() * 80) + 5 + "%";
  
  var jump = randomX;
  //var randomY = Math.floor(Math.random()*y);
  //return [randomX,randomY];
 //console.log(z);

  dolphin.style.left = jump;


   // dolphin.style.left = 0 + "px";
  // $('#dolphin')
  //   .attr({
  //     top: "45%",
  //     left: "10%",  

  //   }, 333);

       if(document.getElementById("dolphin").style.zIndex === "4"){
      document.getElementById("dolphin").style.zIndex = "2";
      document.getElementById("dolphin").style.width = "15%";

   } else{
          document.getElementById("dolphin").style.zIndex = "4";
          document.getElementById("dolphin").style.width = "16%";



   }

$('#dolphin')

     .animate({
   
     top: "20%",
     left: randomX
     
   }, 1000)
.animate({
   
     top: "110%",
     
   }, 1000);

});

  $("#oceanfront1").click(function(){
  var x = document.body.offsetHeight;
  var y = document.body.offsetWidth;
  var randomX = Math.floor(Math.random() * 80) + 5 + "%";
  
  var jump = randomX;
  //var randomY = Math.floor(Math.random()*y);
  //return [randomX,randomY];
 //console.log(z);

  dolphin.style.left = jump;


   // dolphin.style.left = 0 + "px";
  // $('#dolphin')
  //   .attr({
  //     top: "45%",
  //     left: "10%",  

  //   }, 333);

       if(document.getElementById("dolphin").style.zIndex === "4"){
      document.getElementById("dolphin").style.zIndex = "2";
      document.getElementById("dolphin").style.width = "15%";

   } else{
          document.getElementById("dolphin").style.zIndex = "4";
          document.getElementById("dolphin").style.width = "16%";



   }

$('#dolphin')

     .animate({
   
     top: "20%",
     left: randomX
     
   }, 1000)
.animate({
   
     top: "110%",
     
   }, 1000);

});

 var intervalId2 = setInterval(function() {
    // Get the left, remove the "px" from the end and convert it to an integer.
    var posX2 = parseInt(city.style.left.replace(/px$/, '')) || 0;
    
    // Add dir * dist
    posX2 += dir2 * dist2;
    
    // If we are moving right and we've gone over the right edge...
    if (dir2 == 1 && posX2 + city.offsetWidth > parent.offsetWidth) {
        // only move right to the edge...
        posX2 -= posX2 + city.offsetWidth - parent.offsetWidth;
        // and change direction.
        dir2 *= -1;
        
    // If we are moving left and we've gone over the left edge...
    } else if (dir2 == -1 && posX2 < 0) {
        // stop at zero...
        posX2 = 0;
        // and change direction...
        dir2 *= -1;
       

    }
    
    // Set the new position
    city.style.left = posX2 + "px";
}, 50);