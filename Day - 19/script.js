// 1. Function to check Even or Odd.

function checkEvenOdd(number){
    if (number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
};

console.log(checkEvenOdd(80)); // Output : 80

// 2. Arrow function to find square

const square = (n) => n*n;
console.log(square(15));

