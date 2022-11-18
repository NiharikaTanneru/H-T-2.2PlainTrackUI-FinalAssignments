//Nullish Coalescing Operator
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

function getUserInfo() {
  return {
    name: "ram",
    age: "23",
    gender: "male",
  };
}
const result = getUserInfo().company ?? "xyz company";
console.log(result);

//Optional Chaining Operator is a safe way to access nested object properties ,even if the property doesn't exist.

//Below is the example

let animal = {
  cat: {
    name: "Tillu",
    age: 4,
  },
};
console.log(animal.cat?.name); // displays output as Tillu
console.log(animal.dog?.name); // displays output as undefined , So here it basically checks if the dog property is available in animal object, if it exists only then display name else it displays undefined instead of error.
console.log(animal.cat?.speed);

//Immutability in javascript

/*In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default — their properties and elements can be changed without reassigning a new value.*/

//Below is the Example

//primitive values
let person1 = "niharika";

let person2 = person1;

console.log(person1);
console.log(person2);

// Now If i change the person2 value as "Ajay" then

person2 = "Ajay";
console.log(person2); //Here only the value is changing for person2 variable but no person1

//Reference Type means Object and arrays.

let Fruits = {
  name: "Apple",
  Importedfrom: "USA",
};
let DryFruits = Fruits;
DryFruits.name = "Kiwi";
console.log(Fruits);
console.log(DryFruits); // Here fruits object name value also changes relative to dryfruits object name after entering new value so here's the default.

// So we use Spread Operator to copy object/Array values to another respectively.

let vehicle = {
  name: "BMW",
  cost: "$100",
};

let car = { ...vehicle };
console.log(vehicle);
console.log(car);
car.name = "Suzuki";
console.log(car); // Here only car name values changes but not the vehicle name if we use spread operator and copy the object.
/*************************************************************************************/
