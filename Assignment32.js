//Write a JavaScript function to move an array element from one position to another.
var move = (arr, firstIndex, newIndex) => {
  while (firstIndex < 0 || newIndex < 0) {
    firstIndex += arr.length;
    newIndex += arr.length;
  }
  if (newIndex >= arr.length) {
    let j = newIndex - arr.length + 1;
    while (j--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(firstIndex, 1)[0]);
  return arr;
};

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));
