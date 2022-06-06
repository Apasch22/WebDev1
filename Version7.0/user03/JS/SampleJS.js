<html lang="en">
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World"}
</script>

<script>
function myFunction(elmnt, clr) {
  elmnt.style.color = clr
}
</script>

<script>
        function bigImg(x) {
          x.style.height = "375px";
          x.style.width = "400px";
        }
        
        function normalImg(x) {
          x.style.height = "225px";
          x.style.width = "250px";
        }
        </script>

</head>
<body>


<button onclick="myFunction()">More Information</button>

<p id="demo"></p>

<h5 onmouseover="style.color='red'" onmouseout="style.color='black'">Habitat</h5>
<h5 onmouseover="style.color='blue'" onmouseout="style.color='black'">Why they matter</h5>

<h5 onmousedown="myFunction(this,'yellow')" onmouseup="myFunction(this,'purple')">Habitat</h5>
<h5 onmousedown="myFunction(this,'orange')" onmouseup="myFunction(this,'turquoise')">Why they matter</h5>
</body>
</html>