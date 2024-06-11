const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());