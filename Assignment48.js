// Add, subtract ,calculate average of all elements of an array using reduce() method.

const numbers = [175, 50, 25];

let Add = numbers.reduce((acc, curr) => {
  return acc + curr;
});

let Sub = numbers.reduce((acc, curr) => {
  return acc - curr;
});

let Avg = numbers.reduce((acc, curr) => acc + curr) / numbers.length;

console.log("Addition is:" + Add);
console.log("Subtraction is:" + Sub);
console.log("Average is:" + Avg);
