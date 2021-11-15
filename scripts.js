const currentDay = document.getElementById('currentDay')
const m = moment();
console.log(m.toString())

currentDay.textContent = m.format("dddd MMM Mo")