var space = " ";
var pos = 0;
var msg = "William Baker-User 08";

function Scroll() {
  document.title =
    msg.substring(pos, msg.length) + space + msg.substring(0, pos);

  pos++;
  if (pos > msg.length) pos = 0;
  window.setTimeout("Scroll()", 0);
}
Scroll();
function mouseclicking(elmnt, clr) {
  elmnt.style.color = clr;
}
function inputcolor(x) {
  x.style.background = "lightblue";
}
function bigImg(x) {
  x.style.height = "200px";
  x.style.width = "225px";
}

function normalImg(x) {
  x.style.height = "150px";
  x.style.width = "175px";
}