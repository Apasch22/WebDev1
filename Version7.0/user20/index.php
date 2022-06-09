<!DOCTYPE html>



<html lang="en">
<!--Version 7.0
        Name: Max Watts
        Date Completed:
    -->
z
<head>

    <title>Watts' Bondafide Blog</title>
    <link rel="icon" type="favicon" href="images/favicon2.ico" />
    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="WebDev Version 4.0">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->





    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Animate -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Custom -->
    <link rel="stylesheet" href="CSS/style.css">

    <!-- JavaScript -->
    <!-- These are needed to get the responsive menu to work -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <!-- Custom styles for this template -->
    <style type="text/css">
        menu {
            margin: 0;
            padding: 0;
        }

        .wideMargin {
            margin: 15px;
        }

        footer {
            font-size: 12px;
            text-align: center;
        }

        .dark-footer p {
            color: rgb(221, 215, 215);
            ;
        }

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
        }

        h3 {
            color: rgb(221, 215, 215);
        }

        .header-paragraph {
            padding: 5px 50px 30px 5px;
            margin-top: 25px;
            margin-bottom: 50px;
        }

        * {
            margin: 0;
        }
.p { color: rgb(221, 215, 215);}
        .dark-footer {
            position: bottom;
            color: rgb(221, 215, 215);
            text-align: center;
        }

        .menu {
            margin: 0;
            padding: 0;
        }

        footer {
            font-size: 12px;
            text-align: center;
        }

        .wideMargin {
            margin-top: auto;
        }

        .content {
            padding: 5px 50px 30px 5px;
            background-color: rgb(216, 107, 67);
            margin-top: 25px;
            margin-bottom: 50px;
        }

        .logo {
            color: rgb(255, 255, 255)
        }

        .header {
            background-color: rgb(43, 42, 42);
        }
    </style>




    <div class="header">
        <a class="logo">Watts' Wicked Website</a>
        <div class="header-right">
            <a href="index.html" class="nav-item nav-link active">Home</a>
            <a href="bowl_of_fame.html" class="nav-item nav-link active">BoF</a>
            <a href="About_Me.html" class="nav-item nav-link active">Ratings</a>
            <a href="http://localhost:80/WebDev1/Version7.0/user20/index.php" class="nav-item nav-link active">weather</a>
        </div>
    </div>
</head>

<body>

    <!---------------------------------- End the nav-bar ------------------------------------->



    <?php
    $apiKey = "a0ffab231eb6ce6ab1db65358c2d40d0"; //You will need to add in the 
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

    <!doctype html>
    <html>

    <head>

        <title>(CST Time)</title>
        <script type="text/javascript">
            function display_c() {
                var refresh = 1000; // Refresh rate in milli seconds
                mytime = setTimeout('display_ct()', refresh)
            }

            function display_ct() {
                var x = new Date()
                document.getElementById('ct').innerHTML = x;
                display_c();
            }
        </script>
    </head>

    <body onload=display_ct();>
        <span id='ct'></span>

    </body>

    <style>
        body {
            font-family: Arial;
            font-size: 0.95em;
            color: #929292;
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

        .TrollTable {
            position: bottom
        }

        .GeneratedMarquee {
            font-family: 'Comic Sans MS';
            font-size: 1.2em;
            line-height: 1.3em;
            color: #FFFFFF;
            background-color: #000000;
            padding: 1.2em;

        }
    </style>

    <SCRIPT>
        var val = ""
        var counter = "0"
        themessage = new Array()
        themessage[0] = "I agree with you coleslaw is not good at all who in their sick mind would ever want that?"
        themessage[1] = "Yes, Max. You're opinions are 100% fact based. It is always based on hard concrete evidence to disagree with you is foolish"
        themessage[2] = "I have no other feedback than to tell you that you are truly amazing"
        themessage[3] = "What happened on March 17, 2017. Was not your fault."
        themessage[4] = "I solely wanted to type this just to let you know that no matter what ill never be as good as you"
        themessage[5] = "There is one thing wrong with your website. The fact that it doesnt have your number on it. let me get to know you sometime ;)"
        themessage[6] = "The bowl of fame was so carefully picked. i can really tell the hardships that went into choosing the best foods on the planet."
        themessage[7] = "George, you are truly wonderful. I really have to meet you someday."
        themessage[8] = "You know, when I get to meet you in person the first thing I am going to do is give you all my money, seeing as you are so cool."
        themessage[9] = "Will you be my best man? I know you don't know me and stuff, but I would be honoured, I really would."
        themessage[10] = "Yeah I wasnt serious, i dont need feedback ,but. Thanks for the offer!"
        themessage[11] = "You look really familiar...are you a supermodel or something?"
        themessage[12] = "Oh my god... does your header use BOOTSTRAP FRAMEWORK? I'd let someone as sophistacated strap up my boots anyday."
        themessage[13] = "I just think youre so amazing that i want you tto have my social security number and my credit card information. Here, take it..."
        themessage[14] = "I never thought I could love someone I didn't know...but you have proved me wrong."


        x = Math.floor(Math.random() * themessage.length)

        function changer() {
            if (counter >= themessage[x].length) {
                return false
            } else {
                val += themessage[x].charAt(counter)
                document.myform.mytext.value = val
                counter++
                return false
            }
        }

        function resetit() {
            alert("Thanks for your feedback. you will get a response in about 1-400 buisness days")
            document.myform.mytext.value = ""
            counter = "0"
            val = ""
            x = Math.floor(Math.random() * themessage.length)
        }
    </SCRIPT>

    </head>

    <body>

        <div class="report-container">

            <div class="time">
                <marquee class="GeneratedMarquee" direction="left" scrollamount="30" behavior="scroll"><img src="http://openweathermap.org/img/w/<?php echo $data->weather[0]->icon; ?>.png" class="weather-icon" /> <?php echo $data->main->temp_max; ?>&deg;<?php echo $temp; ?><span class="min-temperature"><?php echo $data->main->temp_min; ?>&deg;<?php echo $temp; ?></span><span class="time">
                        <span>Humidity: <?php echo $data->main->humidity; ?> %</span>
                        <span>Wind: <?php echo $data->wind->speed; ?> km/h
                        </span>
            </div> Here's The Weather For today</marquee>



        </div>


    </body>



    \\



    <!-- Full-width images with number and caption text -->

    <div style="padding-left:30px">
        <h1 onMouseover="alert('if you cant tell by now i really dont like tomatoes');" value="Click Me!">Welcome to the right Opinions</h1>
        <table>
            <tr>
                <td><img src="images/Coleslaw.jpeg" width="300" height="200"></td>
                <td><img src="images/VineTomato.jpeg" width="300" height="200"></td>
                <td>
                <td><img src="images/beans.jpeg" width="300" height="200"></td>
                </td>
            </tr>



        </table>
        <p class="header-paragraph" style=" background-color: rgb(216, 107, 67)"> In the photo above ive shown you one of the most uninviting foods and disgusting foods to mand kind otherwise known as,
            <strong>Coleslaw</strong>. In this website we take a look at what foods just arent very good and what foods should be glorified.
        </p>
    </div>



    <!-- Edit this line for the title of your page -->

    <!--↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Put your content below this line ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓-->


    <!-- spacing div-->

    <span class="title-large"> The Opinions Are 100% Factual</span>

    <div class="content">

        <p>Welcome to my blog. Contrary to most blogs everything said on this website should be taken 100% seriously as its all factual. Now you might be curious to what exactly we do on thihs website. Here I can share what i know to be the worst foods and
            what are absolutley glorious. If the food is just that good it can make its way to the <strong>BOWL OF
                FAME</strong>

        </p>
        <div style='padding-top: 1px'></div>
        <p>If there is any disagreement about how a food is rated, just know you're wrong.</p>
    </div>

    <table border="0" width="350" cellspacing="0" cellpadding="0">
        <tr>
            <td><img src="images/roulette.jpeg" width="152" height="216"></td>
            <td>

                <form name="fire">
                    Load number of bullets (1-6):<br /><input name="bullets" type="text" size=3 value=1><br />

                    <p>
                        <input name="message" type="button" value="Play Roulette!" onClick="fireit()">
                    </p>

                </form>

                <script>
                    //Russian Roulette Game- by javascriptkit.com
                    //Visit JavaScript Kit (http://javascriptkit.com) for script
                    //Credit must stay intact for use

                    function fireit() {
                        var theone = Math.floor(Math.random() * 6)

                        if (theone <= document.fire.bullets.value - 1)
                            alert("Bang. You\'re dead!")
                        else {
                            document.fire.message.value = "Whew. Got lucky!"
                            setTimeout("document.fire.message.value='Play Roulette'", 500)
                        }
                    }
                </script>


            </td>
        </tr>
    </table>

    <body>
        <!--↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ Make sure all your content is above this line ↑↑↑↑↑↑↑↑↑-->
        </main>

        <!---------------------------------- Begin the footer ------------->


        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item" style="color:rgb(255, 255, 255)">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div class="col-md-6 item text " style="color:rgb(255, 255, 255)">
                            <h3>Watts' Website</h3>
                            <div position=left>
                                <table class=TrollTable height=182 cellSpacing=0 cellPadding=0 width=542>
                                    <tbody>
                                        <tr>
                                            <td Align=bottom width=542 height=182>
                                                <div face=Arial>
                                                    <FORM name=myform>

                                                </div>
                                                </P>
                                                <P>
                                                <div face=Arial><TEXTAREA onkeypress="return changer()" name=mytext rows=10 wrap=virtual cols=40></TEXTAREA><BR><BR><INPUT onclick=resetit() type=button value="Submit Feedback"></FONT>
                                                    </P>
                                                    </form>
                                            </td>
                                        </tr>
                                    </TBODY>
                                </TABLE>
                            </DIV>

                            </p></textarea></p>

                            <p>We always have the right Opinions</p>
                        </div>
                        <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p class="copyright" style="color:rgb(255, 255, 255)">Watts' Wicked Website © 2022</p>
                </div>
            </footer>
            <div class="push"></div>
            <div class="footer">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </body>

    <!---------------------------------- End the footer ------------->
</body>

</html> 

