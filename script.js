
//getting current time from timer.js//
var currentTime = function() {
    document.getElementById("currentDate")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(currentTime, 1000);

//display time below H1//
$("#currentDate").append(currentTime);

//set current hour event to new color//
let currentHour =moment().format('h');
console.log(currentHour);
if (currentHour == 9){
    $("#9plan").addClass('currentHour'); 
}
if (currentHour == 10){
    $("#10plan").addClass('currentHour'); 
}
if (currentHour == 11){
    $("#11plan").addClass('currentHour'); 
}
if (currentHour == 12){
    $("#12plan").addClass('currentHour'); 
}
if (currentHour == 1){
    $("#1plan").addClass('currentHour'); 
}
if (currentHour == 2){
    $("#2plan").addClass('currentHour'); 
}
if (currentHour == 3){
    $("#3plan").addClass('currentHour'); 
}
if (currentHour == 4){
    $("#4plan").addClass('currentHour'); 
}
if (currentHour == 5){
    $("#5plan").addClass('currentHour'); 
}
