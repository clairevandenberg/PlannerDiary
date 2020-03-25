var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
var time = document.querySelector("#hour");
var newRow = document.querySelector("#row")

//Current Date  
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

// Create & Display Time
// For Loop for times of the day 
var toDo = [];

for (let i = 8; i <19; i++) {
let index = i - 8;
console.log(`i = ${i}`);
let newRow = $("<div class= 'time-block row'>");
if (i <=12)
{ 
var time= $("<div class= 'hour col-md-2'>").text(i + "am");
} else {
time = $("<div class= 'hour col-md-2'>").text(i - 12 + "pm");
}
console.log (time)
if (localStorage.getItem(i) !== null) {
var savedValue = localStorage.getItem(i);
} else {
savedValue = "";
console.log(newRow);
console.log(`^^New Row`);
}
$(".container").append(newRow);
newRow.append(time);
console.log(savedValue);
var currentHour = moment().format('HH');

// organising past time
if (currentHour > i) {
var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "past textInput'>" + savedValue + "</textarea></div>");
newRow.addClass("past");
console.log("Past");
}
console.log(time);


// organising current time
if (currentHour == i) {
   var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "present textInput'>" + savedValue + "</textarea></div>");
   newRow.addClass("present");
   console.log("Present");
}
   console.log(time);
   

// organising future time 
if (currentHour < i) {
   var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "future textInput'>" + savedValue + "</textarea></div>");
   newRow.addClass("future");
   console.log("Future");
}
   console.log(time);
   newRow.append(time);
   }

// Hour Description 
var toDo= $("<div class= '.textarea col-md-8'>");
$("toDo").submit(function( event ){
   event.preventDefault();
})

// Save
function setStyles() {
   var savedValue = localStorage.getItem('.saveBtn');
   var time = localStorage.getItem('.time-block');
   var toDo = localStorage.getItem('.description');
}
  

// for loop time 
// current time
// link current time to for loop times
// if past if future if current 
// type into description 
// connect the description to the time 
// local storage description 
// connect time + description to saveBtn
// local storage elements in saveBtn