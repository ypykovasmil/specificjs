const isWeekday = (date) => date.getDay() % 6 !== 0;
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());