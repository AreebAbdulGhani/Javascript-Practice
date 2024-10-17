// let firstName = "areeb";
// let age = 22;
// let isMarried = false;

// if (isMarried == true) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " is not married");
// }

// let answer = 0;
// for (let i = 0; i <= 100; i++) {
//   answer = answer + i;
// }
// console.log(answer);

// const personArray = ["areeb", "wali", "hamza"];
// console.log(personArray[2]);

// const ages = [21, 22, 23, 24, 25, 29, 36];
// const numberOfPeople = ages.length;
// for (let i = 0; i < numberOfPeople; i++) {
//   if (ages[i] % 2 == 0) {
//     console.log(ages[i]);
//   }
// }

// const ages = [21, 22, 23, 24, 25, 29, 36, 1];
// const maxAge = Math.max(...ages); // Spread the array into individual arguments
// console.log(maxAge);

// const personArray = ["areeb", "wali", "hamza"];
// const genderArray = ["male", "she/her", "he/she/bi/tri"];

// for (let i = 0; i < personArray.length; i++)
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }

// const users1 = {
//   firstName: "goku",
//   gender: "male",
// };

// const users2 = {
//   firstName: "bulma",
//   gender: "female",
// };

// console.log(users1, users2);
// console.log(users1["firstName"]);

// const allUsers = [
//   {
//     firstName: "vegeta",
//     gender: "male",
//   },
//   {
//     firstName: "chichi",
//     gender: "female",
//     metadata: {
//       age: 21,
//       husband: "goku",
//     },
//   },
//   {
//     firstName: "jojo",
//     gender: "lgbtq",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++)
//   if (allUsers[i]["gender"] == ["male"]) {
//     console.log(allUsers[i]["firstName"]);
//   }

// function sum(a, b) {
//   const sumValue = a + b;
//   return sumValue;
// }
// const value = sum(1, 2);
// const value2 = sum(10, 10);
// console.log(value, "and", value2);

// function sub(c, d) {
//   const subValue = c - d;
//   return subValue;
// }
// const value = sub(5, 10);
// console.log(value);

// let sum = 0;
// for (let i = 0; i < 1000000000000; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// const ans = sum(1, 1, displayResult);

// function calculateArithmetic(a, b, type) {
//   if (type == "sum") {
//     return a + b;
//   }

//   if (type == "minus") {
//     return a - b;
//   }
// }

// const value = calculateArithmetic(1, 2, "sum");
// console.log(value);

// function greet() {
//   console.log("hello world");
// }
// function greetAlien() {
//   console.log("hello Alien");
// }
// setTimeout(greet, 1 * 3000);
// setInterval(greetAlien, 1 * 1000);

// let number = 30;
// for (let i = 0; i < 30; i++) {
//   number = number + 1;
//   console.log(number);
// }

// let number = 30;

// const countdown = setInterval(function () {
//   console.log(number);
//   number--;

//   if (number < 0) {
//     clearInterval(countdown);
//     console.log("Countdown finished!");
//   }
// }, 1000);
