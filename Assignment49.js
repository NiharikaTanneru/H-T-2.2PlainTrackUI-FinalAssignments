//Subtract the element of an array using both reduce() and reduceRight() and see the difference.
const numbers = [175, 50, 25];

let res1 = numbers.reduce((a, b) => a - b);
let res2 = numbers.reduceRight((a, b) => a - b);
console.log("The o/p using reduce:" + res1);
console.log("The o/p using Reduceright:" + res2);
