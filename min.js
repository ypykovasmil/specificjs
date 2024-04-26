const shuffledArray = array.sort(() => Math.random() - 0.5); 
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const uniqueArr = (arr) => [...new Set(arr)];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
function myAPITS(someString: string, someNum: number) { ... };
const added = [0, 1, 2, 3, 4].map((item) => item + 1);