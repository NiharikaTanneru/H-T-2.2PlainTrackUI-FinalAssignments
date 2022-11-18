//Write a JavaScript program to find the most frequent item of an array.
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let counter = 0;
let item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) counter++;
    if (mf < counter) {
      mf = counter;
      item = arr1[i];
    }
  }
  counter = 0;
}
console.log(`${item} ( ${mf} times ) `);
