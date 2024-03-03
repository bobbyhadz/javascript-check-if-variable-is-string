// EXAMPLE 1 - Check if a Variable is a String in JavaScript

const variable = 'bobbyhadz.com';

if (typeof variable === 'string') {
  // 👇️ this runs
  console.log('✅ the value is of type string');
} else {
  console.log('⛔️ the value is NOT of type string');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function isString(value) {
//   return typeof value === 'string';
// }

// console.log(isString('abc')); // 👉️ true
// console.log(isString('')); // 👉️ true
// console.log(isString(42)); // 👉️ false
// console.log(isString([])); // 👉️ false
// console.log(isString(null)); // 👉️ false

// const variable = 'bobbyhadz.com';

// if (isString(variable)) {
//   // 👇️ this runs
//   console.log('The variable stores a string');
// } else {
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Variable is a String using `lodash`

// import _ from 'lodash';

// console.log(_.isString('hello')); // 👉️ true
// console.log(_.isString('')); // 👉️ true
// console.log(_.isString(true)); // 👉️ false
// console.log(_.isString(false)); // 👉️ false
// console.log(_.isString(null)); // 👉️ false

// const variable = 'bobbyhadz.com';

// if (_.isString(variable)) {
//   // 👇️ this runs
//   console.log('The variable is a string');
// } else {
//   console.log('The variable is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if a Variable is a String using `Object.prototype.toString.call()`

// const variable = 'bobbyhadz.com';

// if (
//   Object.prototype.toString.call(variable) === '[object String]'
// ) {
//   // 👇️ this runs
//   console.log('The variable is a string');
// } else {
//   console.log('The variable is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Defining a reusable function

// function isString(value) {
//   return (
//     Object.prototype.toString.call(value) === '[object String]'
//   );
// }

// console.log(isString('hello')); // 👉️ true
// console.log(isString('')); // 👉️ true
// console.log(isString(null)); // 👉️ false
