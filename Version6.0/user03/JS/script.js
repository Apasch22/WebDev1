<!DOCTYPE html>
<html>
<head>
<script>
function myFunction(elmnt, clr) {
  elmnt.style.color = clr;
}
</script>
</head>
<body>

<p onmousedown="myFunction(this,'red')" onmouseup="myFunction(this,'green')">
Click the text to change the color. A function, with parameters, is triggered when the mouse button is pressed down, and again, with other parameters, when the mouse button is released.
</p>

</body>
</html>


function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }
   var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();


