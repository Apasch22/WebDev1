function changeText() {
  document.getElementById("textChange").innerHTML =
    "Thanks for liking my Webpage";
}
var space = " ";
var pos = 0;
var msg = "User 08";

function Scroll() {
  document.title =
    msg.substring(pos, msg.length) + space + msg.substring(0, pos);

  pos++;
  if (pos > msg.length) pos = 0;
  window.setTimeout("Scroll()", 0);
}
Scroll();

function upperCase() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
function keyup() {
  var x = document.getElementById("onRelease");
  x.value = x.value.toUpperCase();
}
function hidden() {
  document.getElementById("Secret").innerHTML = "I have appeared";
}
function whichElement(e) {
  var targ;
  if (!e) {
    var e = window.event;
  }
  if (e.target) {
    targ=e.target;
  } else if (e.srcElement) {
    targ=e.srcElement;
  }
  var tname;
  tname = targ.tagName;
  alert("You clicked on a " + tname + " element.");
}
function mouseclicking(elmnt, clr) {
  elmnt.style.color = clr;
}
function inputcolor(x) {
  x.style.background = "lightgreen";
}
function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}
function confirmInput() {
  random = document.forms[0].random.value;
  alert("Hello " + random + "! You will now be redirected to the games");
}
var myWindow;
function openWin() {
  myWindow = window.open("", "", "width=400, height=200");
}

function closeWin() {
  myWindow.close();
}