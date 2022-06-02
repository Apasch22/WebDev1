function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   document.getElementById("Change").innerHTML="Thanks for liking my Webpage";
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
   
   function myFunction1() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function myFunction2(e) {
    x = e.clientX;
    y = e.clientY;
    coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }

  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }

  function bigImg(x) {
    x.style.height = "120px";
    x.style.width = "120px";
  }
  
  function normalImg(x) {
    x.style.height = "90px";
    x.style.width = "90px";
  }

  function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
  }

  function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
  }

  function loadImage() {
    alert("Image is loaded");
  }

  function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
  }

  function myFunction3() {
    document.getElementById("demo1").innerHTML = "Hello World";
  }
  
  function myFunction(elmnt, clr) {
    elmnt.style.color = clr;
  }