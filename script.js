var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
var currentTime = document.querySelector("#hour");

//Current Date  
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

// Create & Display Time
// For Loop for times of the day 
fucntion timeOfDay()
for ( let i = 0; i <9; i++) {
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

   $(".container").append(timeOfDay);
   setRowColor(textarea, i);
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

// Save Button
$(savedValue).on("click", ".saveBtn", function () {
localStorage.setItem($(this).data("hour"), $(".description" + $(this).data)("hour")).val();
});
console.log(saveBtn);
   


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