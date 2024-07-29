const currentDate = () => new Date().toLocaleDateString('en-US');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());