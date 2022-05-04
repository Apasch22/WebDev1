/*Sources:
https://www.w3schools.com/js/js_events_examples.asp
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onmousedown
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onfocus
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onblur
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onclick
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onselect
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_ondblclick
https://www.w3schools.com/js/tryit.asp?filename=tryjs_events_onresize
*/

function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
    document.getElementById("textChange2").innerHTML="My name is User 14";
}
    var space = " ";
var pos = 0;
var msg = "User 14";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function isKeyPressed(event) {
    var text = "The shift key was NOT pressed!";
    if (event.shiftKey == 1) {
      text = "The shift key was pressed!";
    }
    document.getElementById("shift").innerHTML = text;
  }

  function displayDate() {
    document.getElementById("date").innerHTML = Date();
  }

  function clickDownUp(elmnt, clr) {
    elmnt.style.color = clr;
  }

  function focusBox(x) {
    x.style.background = "yellow";
  }

  function outFocusBox() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function boxSelect() {
    document.getElementById("textSelect").innerHTML = "You selected some text";
  }

  function buttonPressed() {
    document.getElementById("buttonPress").innerHTML = "Hello World";
  }

  function doubleClick() {
    document.getElementById("doubleClickText").innerHTML = "Hello World";
  }

  function resizeWindow() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("resizeText").innerHTML = txt;
}