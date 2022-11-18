//Write a JavaScript program to sort the items of an array.

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

var output = arr1.sort(function (a, b) {
  return a - b;
});

console.log("The Sorted output is" + output);
