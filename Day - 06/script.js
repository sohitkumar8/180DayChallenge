// Nested if statement

// let marks = 33;

// if (marks >= 33) {
//     if (marks >= 80){
//         console.log("Excellent Grade: A+");
//     }else {
//         console.log("You Passed");
//     }
// }else {
//     console.log("You Failed");
// }



// let score = 83;
// let grade ;
// if (score >= 80){
//     grade = "A+";
// }else if (score >= 33){
//     grade = "You Passed";
// }else {
//     grade = "You Failed";
// }
// console.log(grade);



// Practice

// let temperature = -3;

// if (temperature >= 30){
//     if (temperature >= 40){
//         console.log("It's very hot");
//     }else{
//         console.log("It's hot");
//     }
// }else if (temperature >= 20){
//     if (temperature >= 25) {
//         console.log("It's warm");
//     }else {
//         console.log("It's cool");
//     }
// }else {
//     if (temperature >= 0) {
//         console.log("It's very cold");
//     }else {
//         console.log("It's freezing");
//     }
    
// }
// if statement ke ander ke if statement rakh sakte hain ise nested if statement kehte hain


// Practice 1
// let age =  20;

// if (age > 0){
//     if (age < 13){
//         console.log("Child");
//     }else if (age >= 13 && age <= 19){
//         console.log("Teenager");
//     }else {
//         console.log("Adult");
//     }
// }else {
//     console.log("Invalid age");
// }

// practice 2

// let num  = 98;

// if (num !== 0 ) {
//     if(num % 2 === 0){
//         console.log("Even Number");
//     }else {
//         console.log("Odd Number");
//     }
// }else{
//     console.log("Zero is neither even nor odd");
// }



// Practice 3

// let score = 95;

// if (score >= 0 && score <= 100){
//     if (score >= 90){
//         console.log("Grade: A+");
//     }else if (score >= 80){
//         console.log("Grade: B");
//     }else if (score >= 70){
//         console.log("Grade: C");
//     }else {
//         console.log("Fail");
//     }
// }else {
//     console.log("Invalid score");
// }



// Practice 4

let season = "summer";
let temperature = 34;

if (season === "winter") {
  if (temperature <= 10) {
    console.log("Wear a coat");
  } else {
    console.log("It's cold, but no need for a coat");
  }
} else if (season === "summer") {
  if (temperature >= 35) {
    console.log("Stay hydrated");
  } else {
    console.log("Enjoy the weather");
  }
} else {
  console.log("Unknown season");
}
