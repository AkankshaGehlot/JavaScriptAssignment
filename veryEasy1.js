//function to convert minutes into seconds
var convert = function (minutes){
    return minutes*60;
}

//taking input from user
var minutes = window.prompt("Enter minutes to convert them into seconds: ");

alert(minutes + " minutes = " + convert(parseInt(minutes)) + " seconds");