//var future = document.querySelector("future");
//var saveBtn = document.querySelector("saveBtn");
//var hover = document.querySelector("hover");
//var present = document.querySelector("present");
//var past = document.querySelector("past");
//var hour = document.querySelector("hour");
//var currentDay = document.querySelector ("currentDay");
//var lead = document.querySelector ("lead");
//var CurrentDate = document.querySelector ("m");


//Current Date + Time 
var currentDate = moment().format('MMMM Do YYYY, h:mm a')
console.log(currentDate);
//Display Current Date + Time on Scheduler 

var eDisplayMoment = document.getElementById('currentDate');
eDisplayMoment.innerHTML = currentDate;

