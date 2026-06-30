function sayName() {
  console.log("M");
  console.log("a");
  console.log("y");
  console.log("u");
  console.log("r");
  console.log("i");
}
// sayName(); //calls funcion
// sayName; //only reference

function addTwoNumbers(num1, num2) {
  //let result = num1 + num2
  //return result
  return num1 + num2;
}
const result = addTwoNumbers(3, 4);
//console.log("Result:", result);

function loginUserMessege(userName) {
  //we can give default vALUE(userName ="sam")
  if (userName === undefined) //or if(!undefined both works)
  {
    console.log("Please enter username");
    return;
  }
  return `${userName} just logged in`;
}
//console.log(loginUserMessege("Mayuri"));
//REST OPERATOR OR SPREAD OPERATOR
// function calculateCartPrice(...num1) {
//   return num1;
// }
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//console.log(calculateCartPrice(100, 200, 400, 600, 300));
//val1=100 val2=200 ...num1becomes array [400,600,300]
const user = {
  userName: "Mayuri",
  age: 39,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and her age is ${anyObject.age}`,
  );
}
//handleObject(user);
//we can pass object in function like
handleObject({
  userName: "Mayuri",
  age: 37,
});
//we can pass array to function
const myArr = [13, 24, 56, 23];
function returnSecondValue(arr1) {
  return arr1[1];
}
console.log(returnSecondValue(myArr));
