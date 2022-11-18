//Create A JavaScript program to check whether the string has '$' symbol in it.

//If the name has $ then the function will throw an error.

//Note: Use Try, Catch and finally to handle the exception.

let text = " Todays Wea$ther is Rainy";
const Arr = [];
try {
  if (text.includes("$"))
    throw "Entered String is:" + `${text}` + "  " + "and $ is present";
} catch (error) {
  console.log("Error:" + "  " + error);
} finally {
  console.log("Executed Successfully");
}
