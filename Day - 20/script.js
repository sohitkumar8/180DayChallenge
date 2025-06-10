// Function to check if a number is positive or negative.

function check(number){
    if (number >= 0){
        return "Positive";
    }else{
        return "Negative";
    }
}

console.log(check(-6));


// Function widh default parameter.
function greet(name = "Guest") {
    console.log(`Welcome ${name}!`);
}
greet("Sohit");
greet();   // uses default "Guest"


function sum(a, b){
    result = a + b;
    return result;
}


// let s = sum(2, 3)
console.log(sum(2, 4));
