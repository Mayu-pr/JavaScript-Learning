const MyArr = [1, 2, 3, 4, 5];
const MyNewArr = ["Mayuri", "Pradip", "Rane"];
// console.log(MyArr);
// console.log(MyNewArr);

// console.log(MyArr.push("Dhiraj"));
// console.log(MyArr);
// const newArr = MyArr.concat(MyNewArr);
// console.log(newArr);
//we can create array using new keyword
const arr1 = new Array(5, 4, 7, 9, 2);
console.log(arr1);
console.log(arr1.length);
console.log(arr1.slice(0, 3)); //doesnot change original array
console.log(arr1);
console.log(arr1.splice(0, 3)); //changes original array
console.log(arr1);
