//Write a JavaScript program to display the current day and time in the following format.

const today = new Date();
const day = today.getDay();
const Weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let Time_of_day = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && Time_of_day === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    Time_of_day = "Noon";
  } else {
    hour = 12;
    Time_of_day = " PM";
  }
}

if (hour === 0 && Time_of_day === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    Time_of_day = " Midnight";
  } else {
    hour = 12;
    Time_of_day = " AM";
  }
}

console.log(`Today is : ${Weekdays[day]}`);
console.log(`Current Time : ${hour}${Time_of_day} : ${minute} : ${second}`);
