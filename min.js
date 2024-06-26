const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const arrayContains = (arr, element) => arr.includes(element);