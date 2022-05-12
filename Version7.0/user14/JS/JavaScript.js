//https://www.w3schools.com/js/js_events_examples.asp

function chosenBrand() {
    chosen = document.forms[0].brands.value;
    if (document.getElementById("brands").value == "Ford") {
    document.getElementById("dropdowntext").innerHTML
    = "Ford is an American automobile manufacturer founded by Henry Ford on June 16, 1903. One well known model they've made is the Ford Mustang."
    }
    else if (document.getElementById("brands").value == "Porsche") {
    document.getElementById("dropdowntext").innerHTML
    = "Porsche is a German automobile manufacturer that was founded by Ferdinand Porsche on April 25, 1931. One well known model they've made is the Porsche 911."
    }
    else if (document.getElementById("brands").value == "Toyota") {
        document.getElementById("dropdowntext").innerHTML
        = "Toyota is a Japanese automobile manufacturer founded by Kiichiro Toyoda on August 28, 1937. One well known model they've made is the Toyota Corolla."
        }
}

function engineQuiz1() {
    document.getElementById("answerText1").innerHTML
    = "The answer is Boxer Engine"
}

function engineQuiz2() {
    document.getElementById("answerText2").innerHTML
    = "The answer is"
}

function engineQuiz3() {
    document.getElementById("answerText3").innerHTML
    = "The answer is"
}