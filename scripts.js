const m = moment();
var currentTime = m.format("hh")
const currentDay = document.getElementById('currentDay')
const timerContainerValue = document.getElementById("timer-container")
var timeValue = document.getElementById('timeValue')
var inputArea = document.getElementById('eventText')
var trueTimeValue = timeValue.innerHTML





console.log("this is our time value " + trueTimeValue)
console.log("this is momentJS's time Value " + currentTime)

if (trueTimeValue == currentTime){
    console.log("this is passing")
    inputArea.classList.add('currentTime');
}
else {
    console.log("Values do not match")
}






currentDay.textContent = m.format("dddd MMM Mo")




