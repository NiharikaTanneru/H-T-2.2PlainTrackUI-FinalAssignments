// Write a JavaScript function to remove a specific element from an array.
var remove_array_element = (arr, n) => {
  var index = arr.indexOf(n);
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return arr;
};

console.log(remove_array_element([2, 5, 9, 6], 5));
