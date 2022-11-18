//Write a JavaScript program which accept a string as input and swap the case of each character. 

let output=(input)=>{
  var ans = input.split('').map(function(char){
    return char === char.toUpperCase()? char.toLowerCase() : char.toUpperCase();
  }).join('');
  console.log(ans);
}
output('The Quick Brown Fox');

