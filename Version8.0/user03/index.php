<?php include 'index.php' ;?>

<html lang="en">
  <!--Version 8.0 
	Name:
	Date Completed:
    -->
  <head>
    <meta charset="utf-8" />
    <title>Web Development User #03</title>
    <style>
      body {
        font-family: Arial;
        font-size: 0.95em;
        color: #929292;
      }

      .report-container {
        border: #e0e0e0 1px solid;
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
    <center>My name is User #03</center>

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
          class="weather-icon"
        />
        <?php echo $data->main->temp_max; ?>&deg;<?php echo $temp; ?><span
          class="min-temperature"
          ><?php echo $data->main->temp_min; ?>&deg;<?php echo $temp; ?></span
        >
      </div>
      <div class="time">
        <div>
          Humidity:
          <?php echo $data->main->humidity; ?> %
        </div>
        <div>
          Wind:
          <?php echo $data->wind->speed; ?> km/h
        </div>
      </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

    <script src="Downloads/handlebars-v4.7.7.js"></script>

    <script>
      var API_KEY = "280ae7a2fdf95f9d29e5c717f7c4c23a";
      var cel = false;
      var wd;

      $("#tempChange").change(function (event) {
        var temp = $("#tempChange").val();
        var color = "blue";
        if (temp > 10 && temp <= 19) {
          color = "yellow";
        } else if (temp > 19 && temp <= 29) {
          color = "green";
        } else if (temp > 29) {
          color = "red";
        }
        $("body").css("background", color);
      });

      function render(wd) {
        var currentLocation = wd.name;
        var currentWeather = wd.weather[0].description;
        var currentTemp = displayTemp(wd.main.temp, cel);
        var high = wd.main.temp_max;
        var low = wd.main.temp_min;
        var icon = wd.weather[0].icon;
        var humidity = wd.main.humidity;
        var wind = wd.wind.speed;
        var currentCountry = wd.country;

        $("#currentLocation").html(currentLocation);
        $("#currentTemp").html(currentTemp);
        $("#currentWeather").html(currentWeather);
        $("#humidity")
          .html(" / humidity: " + humidity + "%")
          .prepend("speed of wind: " + wind + "km/h");

        var iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";
        $("#currentTemp").prepend('<img src="' + iconSrc + '">');
      }

      $(function () {
        var loc;

        $.getJSON("http://ipinfo.io", function (d) {
          loc = d.loc.split(",");
          console.log(loc);
          $.getJSON(
            "http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
              loc[0] +
              "&lon=" +
              loc[1] +
              "&APPID=" +
              API_KEY,
            function (apiData) {
              wd = apiData;

              render(apiData, cel);

              $("#toggle").click(function () {
                cel = !cel;
                render(wd, cel);
              });
            }
          );
        });
      });
    </script>
  </body>
</html>
