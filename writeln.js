const updated = numbers.filter(element => element > 6);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
var DELIM_SIZE = 4;