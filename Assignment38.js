// Example for Rest Operator.
function Employee(name, ...remaining) {
  console.log(
    "Employee name is:" + name + " " + "and available details are " + remaining
  );
}
Employee("John", 9246, "xyz@cognizant.com", 9874588552);

//Example for Spread Operator

let fruits = ["mango", "apple", "banana"];

let vegetables = ["Potato", "beans", "Carrot"];

let Good_food_for_Health = [...fruits, ...vegetables];
console.log(Good_food_for_Health);

//Examples for Destructuring

let person = {
  name: "ram",
  age: 28,
  company: "cognizant",
};
let { name, age, company } = person;
console.log(name);
