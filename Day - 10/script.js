// This code generates a square pattern of stars with a size of 5x5

// let n = prompt("Enter the size of the square (n):");
// let stars = "";
// for (let i = 1; i <= n; i++){

//     for(let j = 1; j <= n; j++){
//         stars += "*";
//     }

//     stars += "\n";
// }
// console.log(stars);

// This code generates a right-angled triangle pattern of stars with a height of 5

// let n = 5;

// for (let i = 1; i <= n; i++){
//     let stars = "";
//     for (let j = 1; j <= i; j++){
//         stars += "*";
//     }

//     console.log(stars);

// }

// This code generates a  right-aligned half triangle pattern of stars with a height of 6, aligned to the right

// let n = 6;
// let stars ="";

// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n - i; j++){
//         stars +=" ";
//     }
//     for (let k = 1; k <= i; k++){
//         stars +="* ";
//     }
//     stars += "\n";

// }
// console.log(stars);

// Top-Angled Centered Pyramid

// let n = 5;
// let stars ="";
// for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= n -i; j++){
//         stars +=" ";
//     }
//     for (let k = 1; k <= i; k++){
//         stars += "* ";
//     }
//     stars += "\n";
// }
// console.log(stars);

// This code generates a diamond pattern of stars with a height of 5 for the top half and 4 for the bottom half

let n = 5;
let stars = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    stars += " ";
  }
  for (let k = 1; k <= i; k++) {
    stars += "* ";
  }
  stars += "\n";
}

for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) {
    stars += " ";
  }
  for (let k = 1; k <= i; k++) {
    stars += "* ";
  }
  stars += "\n";
}
console.log(stars);


