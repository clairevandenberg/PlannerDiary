var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
var currentTime = document.querySelector("#hour");

//Current Date  
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

// Create & Display Time
// For Loop for times of the day 
var toDo = [];

for (let i = 8; i <19; i++) {
let index = i - 8;
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

$(".container").append(time, savedValue, textarea);
}
console.log(savedValue);


// organising past time
if (moment().format ("hh") > i) {
var time = $("<div class='col-md-8> <textarea class='description" + i + "past textInput'>" + savedValue + "</textarea></div");
}
console.log(time);


// organising current time
if (moment().format ('hh') === i) {
   var time = $("<div class='col-md-8> <textarea class='description" + i + "present textInput'>" + savedValue + "</textarea></div");
   }
   console.log(time);
   

// organising future time
if (moment().format ('hh') < i) {
   var time = $("<div class='col-md-8> <textarea class='description" + i + "future textInput'>" + savedValue + "</textarea></div");
   }
   console.log(time);
   }


// Hour Description 
$("textarea").submit(function( event ){
   event.preventDefault();
})
var textarea= $("<div class= 'textarea col-md-8'>").toDo;
// toDo.text(textarea[index]) = todoText
// console.log(toDo);


// Save Button
$(savedValue).on("click"), function () {
event.preventDefault ();
var savedValue= $("<div class = 'saveBtn col-md-2>")
   let index = $(this).attr("savedValue Index");
   let toDo = $(".input"+ index).val();
};
  

// for loop time 
// current time
// link current time to for loop times
// if past if future if current 
// type into description 
// connect the description to the time 
// local storage description 
// connect time + description to saveBtn
// local storage elements in saveBtn