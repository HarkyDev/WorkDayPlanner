const m = moment();
var currentTime = m.format("H")
const currentDay = document.getElementById('currentDay')
const timerContainerValue = document.getElementById("timer-container")
var timeValue = document.getElementById('timeValue')
var inputArea = document.getElementById('eventText')



currentDay.textContent = m.format("dddd MMM Mo")





//////////////////// IDS FOR TIME CARDS
var time13 = document.getElementById('13')
console.log (time13.tagName)





console.log ("CURRENT 24 HOURS TIME: " , currentTime)

 //////////////////// CARD TIME FUNCTION 
 for (var i = 9; i < 18; i++) {
     if (i < currentTime)
        document.getElementById(i).classList.add("pastTime")
    else if (i == currentTime)
        document.getElementById(i).classList.add("currentTime")
    else if (i > currentTime)
        document.getElementById(i).classList.add("futureTime")
            
 } 










