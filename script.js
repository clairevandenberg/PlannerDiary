//var future = document.querySelector("future");
//var saveBtn = document.querySelector("saveBtn");
//var hover = document.querySelector("hover");
//var present = document.querySelector("present");
//var past = document.querySelector("past");
//var hour = document.querySelector("hour");
//var currentDay = document.querySelector ("currentDay");
//var lead = document.querySelector ("lead");
//var CurrentDate = document.querySelector ("m");


// Current Date + Time 
//var m = moment().format('MMMM Do YYYY, h:mm:ss a')
//console.log(moment);

//var m = moment('2013-03-01', 'YYYY-MM-DD')
//console.log(m)

//moment.utc('2016-01-01T00:00:00+02:00').format()
//"2015-12-31T22:00:00+00:00"

//function isDate(string) {
  //  {
       // moment(string).format(["MM-DD-YYYY", "YYYY-MM-DD"]);
   // }
//}
//console.log(moment)

const today = moment();
console.log(
  "Today's date is: " + 
  today.format('YYYY-MM-DD')
);