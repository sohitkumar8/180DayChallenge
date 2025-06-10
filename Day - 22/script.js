// Arrow Functions

// Write your own arrow function to subtract two numbers.
let square = (x, y) => {
    return x - y;
}
console.log(square(7, 5));  // Output: 2

// Function Expressions
let greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Sohit"));


// Write your own arrow function to addition two numbers.
let add = (a, b) => {
    return a + b;
};

console.log("Sum is:", add(10, 5));


// Function Hoisting
greetUser(); // ✅ Works due to hoisting

function greetUser() {
    console.log("Welcome, Sohit!");
}


// But this won’t work with function expressions:
// sayHello(); // ❌ Error

// let sayHello = function() {
//     console.log("Hi!");
// };
