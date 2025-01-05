const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumElement = document.getElementById("day-number");
const yearElement = document.getElementById("year");

const date = new Date();

daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

monthNameElement.innerText = monthsName[date.getMonth()];

dayNameElement.innerText = daysNames[date.getDay()];

dayNumElement.innerText = date.getDate();

yearElement.innerText = date.getFullYear();
