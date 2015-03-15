function calcSpeedMiles() {
    var x, text, speedMiles;

    //Get value of the input field with id="weeklyMileage
    x = document.getElementById("weeklyMileage").value;

    //If x is not a number or less than one
    if (isNaN(x) || x < 1) {
        text = "Input not valid";
    }
    else if(x < 20) {
        text = "Please run at least 20 miles per week before considering speedwork"
    }
    else if (x > 20 && x <= 65){
        speedMiles = Math.round(x * .2);
        text = speedMiles;
    }
    else if (x > 65 <= 100) {
        speedMiles = Math.round(x * .13);
        text = speedMiles;
    }
    else if (x > 100) {
        speedMiles = Math.round(x * .1);
        text = speedMiles;
    }
    document.getElementById("demo").innerHTML = text;
}