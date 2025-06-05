// for loop practice
// Task 1: Print Multiplication Table of 5 using for loop

// let table = prompt("Enter a number to print its multiplication table:");

// for (let i = 1; i <=10; i++){
//     console.log(`${table} x ${i} = ${table * i}`);
// }



// Task 2: Print Stars Pattern (Right Angle Triangle)
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

