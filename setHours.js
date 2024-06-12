const isWeekday = (date) => date.getDay() % 6 !== 0;
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);