function changeText() {
  document.getElementById("textChange").innerHTML =
    "Thanks for liking my Webpage";
}

function number1function() {
  document.body.style.backgroundColor = "lightblue";
}
function number2function() {
  document.body.style.backgroundColor = "white";
}

function number3function() {
  document.getElementById("number3").innerHTML =
    "What do you call a fish with no eyes? A fsh.";
}

function number4function() {
  document.getElementById("number4").innerHTML =
    "X= " + event.clientX + "<br>Y= " + event.clientY;
}

function number5function() {
  var text = "You loose Simon says :(";
  if (event.shiftKey == 1) {
    text = "You win Simon says!!";
  }
  document.getElementById("number5").innerHTML = text;
}

function number6function(e) {
  x = e.clientX;
  y = e.clientY;
  coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("number67").innerHTML = coor;
}

function number7function() {
  document.getElementById("number67").innerHTML = "";
}

function number8function() {
  alert("You get 7 years of bad luck!");
}

// Didn't work (step 11) //
var space = " ";
var pos = 0;
var msg = "User 04";

function Scroll() {
  document.title =
    msg.substring(pos, msg.length) + space + msg.substring(0, pos);

  pos++;
  if (pos > msg.length) pos = 0;
  window.setTimeout("Scroll()", 0);
}
Scroll();
// Didn't work (step 11) //
