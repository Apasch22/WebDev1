<!DOCTYPE html>
<html>
<head>
   <meta name="author" content="Ben Howdle and Dan Matthew">
   <meta name="description" content="A responsive movie poster grabber">
   <title>Front Row by Ben Howdle</title>
   <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0">
   <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.6.2.min.js"></script>
        <!--jQuery, linked from a CDN-->
   <script src="scripts.js"></script>
   <script type="text/javascript" src="https://use.typekit.com/oya4cmx.js"></script>
   <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
   <link rel="stylesheet" href="style.css" />
</head>
<body>
<div class="container">
   <header>
      <h1>Front Row</h1>
   </header>
   <section id="fetch">
      <input type="text" placeholder="Enter a movie title" id="term" />
      <button id="search">Find me a poster</button>
   </section>
   <section id="poster">
   </section>
   <footer>
      <p>Created by <a href="https://twostepmedia.co.uk">Ben Howdle</a></p>
   </footer>
</div>
<script>
$(document).ready(function(){

//This is to remove the validation message if no poster image is present

$('#term').focus(function(){
   var full = $("#poster").has("img").length ? true : false;
   if(full == false){
      $('#poster').empty();
   }
});
//function definition

var getPoster = function(){

//Grab the movie title and store it in a variable

var film = $('#term').val();

 //Check if the user has entered anything

 if(film == ’){

    //If the input field was empty, display a message

    $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
} else {

//They must have entered a value, carry on with API call, first display a loading message to notify the user of activity

$('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");
$.getJSON("https://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {

//TMDb is nice enough to return a message if nothing was found, so we can base our if statement on this information

if (json != "Nothing found."){

   //Display the poster and a message announcing the result

      $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
      $.getJSON("https://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {
         console.log(json);
        } else {

//If nothing is found, I attempt humor by displaying a Goonies poster and confirming that their search returned no results.

$.getJSON("https://api.themoviedb.org/2.1/Movie.search/en/json/
23afca60ebf72f8d88cdcae2c4f31866/goonies?callback=?", function(json) {

   $('#poster').html('<h2 class="loading">We're afraid nothing was found for that search. Perhaps you were looking for The Goonies?</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');

});
}
});

}

return false;
}

//Because we've wrapped the JSON code in a function, we can call it on mouse click or on a hit of the Return button while in the input field

$('#search').click(getPoster);

$('#term').keyup(function(event){

if(event.keyCode == 13){

 getPoster();

}

});

});

</script>
</body>
</html>


