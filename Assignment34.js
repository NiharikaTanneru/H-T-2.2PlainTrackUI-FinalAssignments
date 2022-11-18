//Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
let array_range = (start, end) => {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

console.log(array_range(1, 4));

console.log(array_range(-6, -3));
