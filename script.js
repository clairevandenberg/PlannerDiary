var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
var currentTime = document.querySelector("#hour");

//Current Date  
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
$("#currentDate").text(currentTime)
console.log(currentDate);

// Create & Display Time
// For Loop for times of the day 
var toDo = [];

for ( let i = 8; i <19; i++) {
let index = i - 8;
let newRow = $("<div class= 'time-block row'>");
if(i <=12)
{ 
var time= $("<div class= 'hour col-md-2'>").text(i + "am");
}else {
time = $("<div class= 'hour col-md-2'>").text(i - 12 + "pm");
   }
   console.log (time)
   if (localStorage.getItem(i) !== null) {
      var savedValue = localStorage.getItem(i);
   }else {
      savedValue = "";

   $(".container").append(time, toDo);
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
var textarea= $("<div class= 'textarea col-md-8'>").toDo;
toDo.text(textarea[index]) = todoText
console.log(toDo);



// Save Button
$(savedValue).on("click", function (event) {
   event.preventDefault ();
   let index = $(this).attr("data-btnIndex");
   let toDo = $(".input"+index).val();
});
   


//time += "" + i + "<br>";

 //document.getElementById("timeHour").innerHTML = time;

//  // object for moment to calculate isBefore and isSame
// var date;
// var Currenthour;
//  let momenthour = date.hour(i);


// //.isSame

// //.isBefore
// let descriptionClass = momenthour.isBefore(moment(), 'hour')

// //moment(time).isBefore(time); //

// //.isPresent
// // ?


// //putting the current time into a row
// let hour = document.createElement("div");
// hour.classList.add("hour", "col-2");
// hour.innerText = currentTime.format("hh A");
// }

// // Create Display Content 
// let content = document.createElement("div");
// content.classList.add("content", "col-8");
// //allow element to be editable so user can type their to dos
// content.setAttribute("contenteditable", true);

// // Create and Display Save Button 
// let saveBtn = document.createElement("div");
// saveBtn.classList.add("saveBtn", "col-2");
// saveBtn.setAttribute("time" ("i"));
// saveBtn.addEventListener("click", dataSaved);

// // setting stype

// // hour 
// ("hour", "col-2");
// // descripton 
// ("content", "col-8");
// // save 
// ("saveBtn", "col-2");

// // current time 
// ("present")

// //future
// ("future");