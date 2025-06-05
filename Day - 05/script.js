// Operators in JavaScript.

// Comparison Operators
/*
Equal to ==            Equal to & type ===

Not equal to !=        Not equal to & type !==

>, >=, <, <=
Greater than, greater than or equal to, less than, less than or equal to
*/
// let a = 5;
// let b = 3;

// console.log("a = 5 & b = 3");
// console.log("a == b: ", a == b); // false
// console.log("a != b: ", a != b); // true    

// let c = 7;
// let d = "7";
// console.log("c = 6 & d = '7'");
// console.log("c === d: ", c === d); // false
// console.log("c !== d: ", c !== d); // true

// let x = 10;
// let y = 8;

// console.log("x = 10 & y = 8");
// console.log("x > y: ", x > y); // true
// console.log("x >= y: ", x >= y); // true
// console.log("x < y: ", x < y); // false
// console.log("x <= y: ", x <= y); // false




// Logical Operators:

/*
Logical AND  &&
Logical OR   ||
Logical NOT  ! 
*/

// let a = true;
// let b = false;

// console.log("a = true & b = false");
// console.log("a && b: ", a && b); // false
// console.log("a || b: ", a || b); // true
// console.log("!a: ", !a); // false

// let x = 6;
// let y = 4;

// let cond1 = x > y; // true
// let cond2 = x === 6; // true

// console.log("cond1 && cond2: ", cond1 && cond2); // true
// console.log("cond1 || cond2: ", cond1 || cond2); // true
// console.log("!cond1: ", !cond1); // false
// console.log("!cond2: ", !cond2); // false






// Conditional Operators
// To implement condition in the code

// if  statement

// let age = 10;

// if (age >= 18){
//     console.log("You are an adult.");
// }

// if (age < 18){
//     console.log("You are not an adult.");
// }

// let mode = "light";
// let color ;
// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";
// }
// console.log("The color is: ", color);





// if else statement

// let age = 20;

// if (age >= 18){
//     console.log("You can vote.");
// }else{
//     console.log("You cannot vote.");
// }

// let mode = "light";
// let color;
// if (mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }
// console.log("The color is: ", color);




// if else if statement

// let mode = "orenge";
// let color;

// if (mode === "dark"){
//     color = "black";    
// } else if (mode === "light"){
//     color = "white";
// } else if (mode === "blue"){
//     color = "blue";
// } else{
//     color = "red";
// }
// console.log("The color is: ", color);




// Ternary Operator
// condition? true output : false output

// age = 19;
// let result = (age >= 18) ? "You can vote." : "You cannot vote.";
// console.log(result);





// Let's  Practice 

// 1. Get user to input a number using prompt("Enter a number:") Check if the number is a multiple of 5 or not.

// let num = prompt("Enter a number:");

// if (num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is NOT a multiple of 5");
// }


// 2. Write a code which can give grades to students according to their scores:
// 90-100,A
// 70-89,B 
// 60-69,C 
// 50-59,D 
// 0-49,F 

let score = 75;
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
}else if (score >= 70 && score <= 89){
    grade = "B";
}else if (score >= 60 && score <= 69){
    grade = "C";
}else if (score >= 50 && score <= 59){
    grade = "D";
}else if (scere >= 0 && score <= 49) {
    grade = "F";
}

console.log("According to your scores, your grade was :", grade);
