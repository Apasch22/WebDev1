<!DOCTYPE html>
<html lang="en">
<!--Version 7.0 
    Name:Easton Raboin  
    Date Completed: 
-->

<head>
    <title>MJ V.S. James</title>

    <!-- Bootstrap meta data -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Introduction to JavaScript">

    <!-- CSS -->
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <!-- Animate -->
    <link rel="stylesheet" href="CSS/style.css">

    <!-- JavaScript -->
    <!-- These are needed to get the responsive menu to work -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <title>Navbar</title>
    <meta charset="utf-8">
    
 </head>
 <link rel="icon" type="image/x-icon" href="images/ejlogo.ico"/>
 <body class="page">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a href="http://shakonet.isd720.com" class="navbar-brand">MJ V.S. James</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
     <menu>
        <nav class="navbar navbar-custom">
        <nav class="navbar navbar-expand-sm navbar-light bg-light ">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="offense.html">Offense</a>
              </li>
            <li class="nav-item">
              <a class="nav-link" href="Clutch.html">Championships and clutch</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="overall.html">Overall stats</a>
            </li>
            </ul>
          </div>
        </nav>
      </menu>
      

        <h1 id="topHeading">Michael Jordan V.S. LeBron James</h1>

        <img src="https://cdn.nba.com/manage/2021/08/michael-jordan-looks.jpg"
            alt="Michael Jordan" style="width:50%;">
        <img src="https://imageio.forbes.com/specials-images/imageserve/6217d2232a05f46858a3c8f0/LeBron-James-during-a-Lakers-game-versus-the-Jazz/0x0.jpg?fit=crop&format=jpg&crop=3840,2160,x0,y0,safe"
            alt="LeBron James" id="lebron">
        
            <h2 id="TheBest">Who truly is the BEST...</h2>
    </body>
    <footer>
      <div id="demobox"><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
          <div class="container">
                  <div class="text-center center-block">
                          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuc.fandom.com%2Fwiki%2FDora_the_Explorer&psig=AOvVaw15g8Axy6CMAc72SmAAjVU2&ust=1651675852654000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjYhZbKw_cCFQAAAAAdAAAAABAD"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuc.fandom.com%2Fwiki%2FDora_the_Explorer&psig=AOvVaw15g8Axy6CMAc72SmAAjVU2&ust=1651675852654000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjYhZbKw_cCFQAAAAAdAAAAABAD"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                          <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmuc.fandom.com%2Fwiki%2FDora_the_Explorer&psig=AOvVaw15g8Axy6CMAc72SmAAjVU2&ust=1651675852654000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjYhZbKw_cCFQAAAAAdAAAAABAD"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
              </div>
          </div>
          </section>
          
          <div class="text-center center-block"><p id="mjfoot">This is an article about MJ and Lebron</br>
          if you want to know more you can contact me here</p>
        <div class="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="/"> Easton Raboin</a>
        </div></div>
          
          <style id="foot"></style>
      
      </footer>
</html>

<?php
$apiKey = "API KEY"; //You will need to add in the 
$cityId = "5046997"; //5046997 Shakopee City Id
$units = "metric";//metric-Celcius  imperial-Farhenheit
if ($units == 'metric'){//Changes the $temp varaible to match 
    $temp = "C";
}
else {
    $temp = "F";
}
$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" . $cityId . "&lang=en&units=" . $units . "&APPID=" . $apiKey;

$ch = curl_init();

curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $googleApiUrl);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$response = curl_exec($ch);

curl_close($ch);
$data = json_decode($response);
$currentTime = time();
?>

<!doctype html>
<html>
<head>
<title>Forecast Weather using OpenWeatherMap with PHP</title>

<style>
body {
    font-family: Arial;
    font-size: 0.95em;
    color: #929292;
}

.report-container {
    border: #E0E0E0 1px solid;
    padding: 20px 40px 40px 40px;
    border-radius: 2px;
    width: 550px;
    margin: 0 auto;
}

.weather-icon {
    vertical-align: middle;
    margin-right: 20px;
}

.weather-forecast {
    color: #212121;
    font-size: 1.2em;
    font-weight: bold;
    margin: 20px 0px;
}

span.min-temperature {
    margin-left: 15px;
    color: #929292;
}

.time {
    line-height: 25px;
}
</style>

</head>
<body>

    <div class="report-container">
        <h2><?php echo $data->name; ?> Weather Status</h2>
        <div class="time">
            <div><?php echo date("l g:i a", $currentTime); ?></div>
            <div><?php echo date("jS F, Y",$currentTime); ?></div>
            <div><?php echo ucwords($data->weather[0]->description); ?></div>
        </div>
        <div class="weather-forecast">
            <img
                src="http://openweathermap.org/img/w/<?php echo $data->weather[0]->icon; ?>.png"
                class="weather-icon" /> <?php echo $data->main->temp_max; ?>&deg;<?php echo $temp; ?><span
                class="min-temperature"><?php echo $data->main->temp_min; ?>&deg;<?php echo $temp; ?></span>
        </div>
        <div class="time">
            <div>Humidity: <?php echo $data->main->humidity; ?> %</div>
            <div>Wind: <?php echo $data->wind->speed; ?> km/h</div>
        </div>
    </div>


</body>
</html>