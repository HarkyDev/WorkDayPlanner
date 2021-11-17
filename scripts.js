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
 var backGroundColour = function(){
    for (var i = 9; i < 18; i++) {
       console.log("a minute has passed ")
        if (i < currentTime)
            document.getElementById(i).classList.add("pastTime")
        else if (i == currentTime)
            document.getElementById(i).classList.add("currentTime")
        else if (i > currentTime)
            document.getElementById(i).classList.add("futureTime")
    } 
    {
    }
    
};
//Save Function
$('.saveBtn').click(function () {
    var hourTime9 = document.getElementById('9').value;
    localStorage.setItem('text9', hourTime9);
    var hourTime10 = document.getElementById('10').value;
    localStorage.setItem('text10', hourTime10);
    var hourTime11 = document.getElementById('11').value;
    localStorage.setItem('text11', hourTime11);
    var hourTime12 = document.getElementById('12').value;
    localStorage.setItem('text12', hourTime12);
    var hourTime13 = document.getElementById('13').value;
    localStorage.setItem('text13', hourTime13);
    var hourTime14 = document.getElementById('14').value;
    localStorage.setItem('text14', hourTime14);
    var hourTime15 = document.getElementById('15').value;
    localStorage.setItem('text15', hourTime15);
    var hourTime16 = document.getElementById('16').value;
    localStorage.setItem('text16', hourTime16);
    var hourTime17 = document.getElementById('17').value;
    localStorage.setItem('text17', hourTime17);
});
    
    
///Write saves
var savedValues9 = localStorage.getItem('text9');
document.getElementById('9').value = savedValues9;
var savedValues10 = localStorage.getItem('text10');
document.getElementById('10').value = savedValues10;
var savedValues11 = localStorage.getItem('text11');
document.getElementById('11').value = savedValues11;
var savedValues12 = localStorage.getItem('text12');
document.getElementById('12').value = savedValues12;
var savedValues13 = localStorage.getItem('text13');
document.getElementById('13').value = savedValues13;
var savedValues14 = localStorage.getItem('text14');
document.getElementById('14').value = savedValues14;
var savedValues15 = localStorage.getItem('text15');
document.getElementById('15').value = savedValues15;
var savedValues16 = localStorage.getItem('text16');
document.getElementById('16').value = savedValues16;
var savedValues17 = localStorage.getItem('text17');
document.getElementById('17').value = savedValues17;
/////call back for code on load
backGroundColour()