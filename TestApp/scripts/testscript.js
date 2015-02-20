function calcSpeedMiles() {
    var x, text;

    //Get value of the input field with id="weeklyMileage
    x = document.getElementById("weeklyMileage").value;

    //If x is not a number or less than one
    if (isNaN(x) || x < 1) {
        text = "Input not valid";
    }
    else if(x < 20) {
        text = "Please run at least 20 miles per week before considering speedwork"
    }
    else {
        var speedMiles = x * .2;
        text = speedMiles;
    }
    document.getElementById("demo").innerHTML = text;
}