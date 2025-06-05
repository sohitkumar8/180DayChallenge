// Array methods

let fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango"); // Array ke end meib new element add karta hai
console.log(fruits);

fruits.pop(); // Array ke end se last element ko remove karta hai
console.log(fruits);

fruits.unshift("Grapes"); // Array ke start mein new element add karta hai
console.log(fruits);

fruits.shift(); // Array ke start se first element ko remove karta hai
console.log(fruits);

console.log(fruits.length); // Array ki length ko return karta hai

console.log(fruits.indexOf("Banana")); // Array mein kisi element ka index return karta hai agar element nahi hai to -1 return karta hai

console.log(fruits.includes("Orange")); // Array mein kisi element ki maujoodgi check karta hai, true ya false return karta hai

fruits.join(", "); // Array ke elements ko ek string mein join karta hai, separator ke saath
console.log(fruits.join(", ")); // Output: "Apple, Banana, Grapes"

fruits.reverse(); // Array ke elements ko reverse karta hai
console.log(fruits); // Output: ["Orange", "Banana", "Apple"]

fruits.sort(); // Array ke elements ko ascending order mein sort karta hai (alphabetical ya numbers)
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

console.log(fruits.slice(1, 2)); // Array ka ek part copy karta hai (original array change nahi hota), start index se end index tak 

 
// Add 2 elements
fruits.splice(1, 0, "Kiwi", "Mango"); // Array mein kisi position par element ko add ya remove karta hai, yahan index 1 se 2 element add karke "Kiwi", "Mango" add kiya gaya
console.log(fruits); // Output: ["Apple", "Kiwi", "Mango", "Banana" "Orange"]

// Remove 1 element
fruits.splice(2, 1); // Array mein kisi position se element ko remove karta hai, yahan index 2 se 1 element remove kiya gaya
console.log(fruits); // Output: ["Apple", "Kiwi", "Banana", "Orange"]

// Replace 1 element
fruits.splice(1, 1, "Pineapple"); // Array mein kisi position par element ko replace karta hai, yahan index 1 se 1 element replace karke "Pineapple" add kiya gaya
console.log(fruits); // Output: ["Apple", "Pineapple", "Banana", "Orange"]

// concat() - Do arrays ko jodta hai
let fruits2 = ["Cherry", "Peach"];
let allFruits = fruits.concat(fruits2);
console.log(allFruits); // Output: ["Apple", "Pineapple", "Banana", "Orange", "Cherry", "Peach"]


// toString() - Array ko string mein convert karta hai
console.log(allFruits.toString()); // Output: "Apple,Pineapple,Banana,Orange,Cherry,Peach"

// All task completed successfully