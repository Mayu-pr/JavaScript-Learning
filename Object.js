//we can declare obj 1)literal-> not singleton(multiple instance)
//                   2)constructor ->singleton using constructor
//Object.create ->singleton using constr
//obj literals
const mySym = Symbol("key");
const JsUser = {
  name: "Mayuri",
  [mySym]: "key1",
  age: 29,
  location: "Pune",
  lastLoginDays: ["Monday", "Saturday"],
};
// console.log(JsUser.name);
// console.log(JsUser["name"]);
console.log(JsUser[mySym]);

JsUser.greeting = function () {
  console.log(`Hello Js User, ${JsUser.name}`);
};

// console.log(JsUser.greeting());
// --------------------------------------------------------------
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
//const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
//const tinderUser = new Object(); this is singleton
const tinderUser = {};
tinderUser.id = "1";
tinderUser.email = "someone@gmail.com";
tinderUser.isLoggedIn = true;

//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));
//-------------------------------------------------------
//destructuring of objects
const course = {
  courseName: "JS",
  fees: "1000",
  courseInstructor: "Mayuri",
};
const { fees: fee } = course;
//console.log(fees);
console.log(fee); //both gives same results
