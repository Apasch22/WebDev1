<?php
$apiKey = "cdd79c681586f1aadf1eeb70e91d9977"; //You will need to add in the 
$cityId = "5046997"; //5046997 Shakopee City Id
$units = "imperial"; //metric-Celcius  imperial-Farhenheit

if ($units == 'metric') { //Changes the $temp varaible to match 
  $temp = "C";
} else {
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

<!DOCTYPE html>
<html lang="en">
<!--Version 7.0 
    Name: Derrick Damjanovic
    Date Completed: May 9 2022
-->

<head>
  <title>Components of Cars: Home</title>

  <!-- Bootstrap meta data -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="Components of Cars" />

  <!-- CSS -->
  <!--Bootstrap-->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <!-- Animate -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" />
  <!-- Styles -->
  <link rel="stylesheet" href="CSS/style.css" />
  <!--Favicon-->
  <link rel="icon" type="image/x-icon" href="images/v8engine.ico" />

  <!-- JavaScript -->
  <!-- These are needed to get the responsive menu to work -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="/Version7.0/user14/JS/JavaScript.js"></script>

  <!--Internal Styles-->
  <style>
    .dropdown {
      padding: 10px 10px;
      border: 1px solid black;
      margin: 50px 100px;
      background-color: steelblue;
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
  <!--Navbar Start-->
  <!--Bootstrap Element-->
  <div class="menu">
    <nav class="navbar navbar-expand-md navbar-custom">
      <div class="navbar-nav">
        <a href="#" class="navtext nav-item nav-link nav-activepage">Home</a>
        <a href="overview.html" class="navtext nav-item nav-link">Overview</a>
        <a href="engine.html" class="navtext nav-item nav-link">Engines</a>
        <a href="transmission.html" class="navtext nav-item nav-link">Transmissions</a>
      </div>
    </nav>
  </div>
  <!--Navbar End-->
  <!--Main Content Start-->
  <main class="widemargin">
    <center>
      <img class="largeimage rounded" src="images/carparts.jpeg" alt="Car Components">
    </center>
    <div class="textholder" style="margin-top: 0px">
      <p class="maintext">
        Welcome to my website. This website will look at different components
        of cars and explain a few elements more in-depth, such as the engine
        and transmission.
      </p>
      <p class="smalltext">
        In the overview page, we will look at some of the main parts of a car
        and briefly cover each one.
      </p>
      <p class="smalltext">
        In the engines page, we will look at the basics of how engines work
        and some of the different types of engines found in cars.
      </p>
      <p class="smalltext">
        In the transmissions page, we will look at the basics of transmissions
        and look at different types of transmissions.
      </p>
    </div>
    <!--Dropdown Interactive Start-->
    <div class="dropdown">
      <form class="maintext" style="color: beige;">
        Choose from the dropdown menu to learn about a car manufacturer:
        <select id="brands" class="smalltext" style="color:black" onchange="chosenBrand()">
          <option value="Ford">Ford</option>
          <option value="Porsche">Porsche</option>
          <option value="Toyota">Toyota</option>
        </select>
      </form>
      <p id="dropdowntext" class="smalltext" style="color: beige;">
        Pick a brand above to learn about it.
      </p>
    </div>
    <center>
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
</center>
<script>
  var temp = <?php $data->main->temp_max; ?>
    if (temp <= 40); {
    $('.report-container').css = 'background-color' = 'black';
} elseif (temp <= 50 && temp >= 41); {
    $('.report-container').css = 'background-color' = 'darkblue';
} elseif (temp <= 60 && temp >= 51); {
    $('.report-container').css = 'background-color' = 'blue';
} elseif (temp <= 70 && temp >= 61); {
    $('.report-container').css = 'background-color' = 'lightblue';
} elseif (temp >= 71); {
    $('.report-container').css = 'background-color' = 'white';
}
</script>
    <!--Dropdown Interactive End-->
  </main>
  <!--Main Content End-->
  <!--Footer Start-->
  <!--Bootstrap Element-->
  <footer id="footer" class="pt-4">
    <div class="container-fluid text-center text-md-left">
      <div class="row">
        <div class="col-md-5 mb-md-0 mb-5">
          <h5 class="footer-text footer-header">Social Media & Contact Information</h5>
          <ul class="list-unstyled">
            <li>
              <a href="https://www.instagram.com/?hl=en" class="footer-text">Instagram
                <img class="footer-image" src="/version7.0/user14/images/instagramlogo2.png" alt="Instagram" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/" class="footer-text">Facebook
                <img class="footer-image" src="/version7.0/user14/images/facebooklogo2.png" alt="Facebook" /></a>
            </li>
            <li>
              <span class="footer-text">302494@shakopeeschools.org<img class="footer-image" src="/version7.0/user14/images/gmailicon.png" alt="Gmail" /></span>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-md-0 mb-4">
          <h5 class="footer-text footer-header">Navigation</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="footer-text">Home</a>
            </li>
            <li>
              <a href="overview.html" class="footer-text">Overview</a>
            </li>
            <li>
              <a href="engine.html" class="footer-text">Engines</a>
            </li>
            <li>
              <a href="transmission.html" class="footer-text">Transmissions</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <p class="footer-text">Created May 9th 2022</p>
          <p class="footer-text">WebDev14</p>
          <p class="footer-text footer-text-copyright">© 2022 Copyright:
            <a class="footer-text footer-text-copyright" href="https://mdbootstrap.com/">
              MDBootstrap.com</a>
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  </footer>
  <!--Footer End-->
</body>

</html>