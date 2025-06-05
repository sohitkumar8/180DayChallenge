// const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]); // First element
// console.log(fruits[2]); // Third element
// console.log(fruits[fruits.length - 2]); // Second to last element


// Practice: 1
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60] find the average marks of the entire class.

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let value of marks){
//     sum += value;
// }
// let average = sum / marks.length;
// console.log("Average marks:", average);
// // console.log(sum);


// Practice: 2
//  For a fiven array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% off on them. change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items){
    // console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value at after offer = ${items[i]}`);
    i++;
}