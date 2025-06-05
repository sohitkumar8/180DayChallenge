// This code generates a right-angled triangle pattern using asterisks (*).

// let row = 5;
// for (let i = 1; i <= row; i++){
//     let pattern ="";
//     for (let j = 1; j <=i; j++){
//         pattern += "*";
//     }
//     console.log(pattern);
    
// }

// Output:
// *
// **
// ***
// ****
// *****


// This code generates a right-angled triangle pattern using asterisks (*) in reverse order.

// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// Output:
// *****
// ****
// ***
// **
// *

// Yeh pattern banane ke liye nested for loop ka use kiya jaata hai.
// Bahar wala loop line control karta hai.
// Andar wala loop stars print karta hai.


// Task 1: 1 se 10 tak ke numbers print karo.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// Task 2: 1 se 100 tak ke even numbers print karo.

// for (let i = 1; i <= 100; i++){
//     if(i % 2 ===0){
//         console.log(i);
        
//     }
// }


// Task 3: 1 se 50 tak ke odd numbers print karo.

// for (let i = 1; i <= 50; i++){
//     if (i % 2 !== 0){
//         console.log(i);
        
//     }
// }


// Task 4: 10 se 1 tak reverse counting print karo.

// for (let i = 10; i >= 1; i--){
//     console.log(i);
    
// }


// Task 5: 1 se 10 tak numbers ka sum nikalo.

// let sum = 0; 
// for (let i = 1; i <= 10; i++){
//     sum += i; // sum = sum + i
// }
// console.log("Sum of numbers from 1 to 10 is: ", sum);


// Task 6: 1 se 10 tak numbers ka square print karo.

// for (let i = 1; i <= 10; i++){
//     let square = i * i; // ya i ** 2
//     console.log(`Square of ${i} is: ${square}`); // Template literals ka use kiya gaya hai
// }

    
// Task 7: 1 se 5 tak factorial nikalo. (e.g., 5! = 5×4×3×2×1)

// let factorial = 1;
// for (let i = 1; i <= 5; i++) {
//     factorial *= i; // ya factorial = factorial * i
// }
// console.log("Factorial of 5 is: ", factorial); // Output: Factorial of 5 is: 120


// Task 8: Ek array ke sabhi elements ko print karo.

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Task 9: Ek array ke elements ka total sum nikalo

// let numbers = [10, 20, 30, 40, 50];
// let totalSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     totalSum += numbers[i]; // ya totalSum = totalSum + numbers[i]
// }
// console.log("Total sum of array elements is: ", totalSum); // Output: Total sum of array elements is: 150 



// Task 10: Array ke andar jitne bhi even numbers hain, sirf unko print karo.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) { // Check if the number is even
//         console.log(numbers[i]); // Print the even number
//     }
// }


// Task 11: 2 ka multiplication table banao using loop.

// let number = 2;
// for (let i = 1; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`); // Template literals ka use kiya gaya hai
// }


// Task 15: Nested loop ka use karke pattern banao:
// *
// **
// ***
// ****
// *****

let rows = 5;
for (let i = 1; i <= rows; i++){
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
    
}