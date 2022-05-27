<?php
$apiKey = "f9706001348da13f0e0cad39f2c22ad7"; //You will need to add in the 
$cityId = "5046997"; //5046997 Shakopee City Id
$units = "imperial";//metric-Celcius  imperial-Farhenheit
if ($units == 'imperial'){//Changes the $temp varaible to match 
    $temp = "C";
}
else {
    $temp = "F";
}
$googleApiUrl = "http://api.openweathermap.org/data/2.5/weather?id=5046997" . $cityId . "&lang=en&units=" . $units . "&APPID=5046997" . $apiKey; "f9706001348da13f0e0cad39f2c22ad7" .

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


<html lang="en">
    <!--Version 8.0 
	Name:
	Date Completed:
    -->
    <head>
        
        <title>Web Development User #10</title>
    
    </head>
    
    <body>
        
        <center>My name is User #10</center>
    
    </body>

</html>