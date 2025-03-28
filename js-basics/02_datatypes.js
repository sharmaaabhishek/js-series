"use strict"; // treat all JS code as newer version

// alert(3 + 3); // we are using node.js and not browser, so alert is not defined (browsers uses its own engine V8)


// console.log("Abhishek"); console.log(12345) // ❌ wrong way to write code, you should maintain readability

// console.log("Abhishek"); // ✅ This is right way to code for better readabilty

// console.log(678);

// Primitive Dataypes

let name = "Abhishek" // => string
let age = 40 // => number (range of number = 2 to power 53)
let stockBalance = BigInt(4899897686897786758787668778578690) // => BigInt
let isCapable = true // => boolean
let nullValue = null // => null
let undefinedValue; // => undefined


// Non-primitive data

let object = {}

console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof isCapable);
console.log(typeof stockBalance);
console.log(typeof age);
console.log(typeof name);