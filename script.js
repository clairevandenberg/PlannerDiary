//var future = document.querySelector("future");
//var hover = document.querySelector("hover");
//var present = document.querySelector("present");
//var past = document.querySelector("past");
//var hour = document.querySelector("hour");
//var currentDay = document.querySelector ("currentDay");
//var lead = document.querySelector ("lead");
//var CurrentDate = document.querySelector ("m");

var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
//var currentTime = document.querySelector("#hour");
var time = document.querySelector("#time-block");
//Current Date + Time 
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);


// Create & Display Time
// For Loop for times of the day 
{ 
var time = "";
var i;
for ( i = 8; i <25; i++) {
time += "" + i + "<br>";
}
 document.getElementById("timeHour").innerHTML = time;

//current time starting colum of time
var currentTime = moment().startOf ('hh');
console.log(currentTime);

//.isSame
moment('2010-10-20').isSame('2009-12-31', 'year'); 

//.isBefore
moment('2010-10-20').isBefore('2010-10-21'); //

//.isPresent
?


//putting the current time into a row
let hour = document.createElement("div");
hour.classList.add("hour", "col-2");
hour.innerText = currentTime.format("hh A");
}

// Create Display Content 
let content = document.createElement("div");
content.classList.add("content", "col-8");
//allow element to be editable so user can type their to dos
content.setAttribute("contenteditable", true);



// Create and Display Save Button 
let saveBtn = document.createElement("div");
saveBtn.classList.add("saveBtn", "col-2");
saveBtn.setAttribute("time" ("i"));
saveBtn.addEventListener("click", dataSaved);

//end time 
//var endTime = moment().endOf('day')
//console.log(endTime);

//Display Current Date + Time on Scheduler 
//var eDisplayMoment = document.getElementById('currentDate');
//eDisplayMoment.innerHTML = currentDate;

//var dateOuterDiv = document.createElement("div");
   // dateOuterDiv.classList.add("time-block");

//let hourRow = document.createElement("div");
   // hourRow.classList.add("row");

// Diplaying Time 
// times of the day \
//function time(i) {
 //   if (i < 23) {
  //      i = "0" + i;
 //     }
 //     return i;
 //   }
//function timeContainer () {
//var date= new Date();
//var demo = document.getElementById("demo");
//var hours = time(d.getHours());
//x.innerHTML = hours
//}



// Displaying Content 

// Displaying 









//var plannertimes= {
   // "0900" : '1',
   // '1000' : '2',
  //  '1100' : '3',
  //  '1200' : '4',
  //  '1300' : '5',
  //  '1400' : '6',
 //   '1500' : '7',
//   '1600' : '8',
  //  '1700' : '9'
//}
//console.log(plannertimes);

//Sorting Planner Numbers
//{let plannertimes = [2 , 3, 4, 5, 6, 7, 8, 9, 1 ];
//plannertimes.sort((a,b) => a - b);
//console.log(plannertimes);
//}



// This .on("click") function will planner times
//$("plannertimes").on("click", function (event) {
 // event.preventDefault()
 // )};

// This .on("click") function will toDo
//$("toDo").on("click", function (event) {
//    event.preventDefault()
//)};

//var today = moment 
//var yesturday = moment 
//today.format ()
//yesturday.fomrat ()
//yesturday.isBefore (t)