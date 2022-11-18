// Object Literal

let Obj = {
  name: "Camera",
  company: "Sony",
  quality: "good",
  takepic: function () {
    console.log("Picture Taken");
  },
  values: function () {
    console.log(
      `Object is:${Obj.name} ,Quality is: ${Obj.quality} and company is ${Obj.company}`
    );
  },
};

console.log("The Properties Of Object are: " + Object.getOwnPropertyNames(Obj));
Obj.values();
