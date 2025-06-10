// Function with return value
function multiply (x, y){
    return (x * y);
}

let result = multiply(3, 5);
console.log("Multiply is :", result);


//  Nested Function in JavaScript (Function inside another function)
function outer(){
    function inner(){
        console.log("This is inner function");
        
    }
    inner(); // calling inner function from outer
    console.log("This is outer function");
    
}
outer();


// Example with Calculation:
function calculate(a, b){
    function addition(c, d) {
        return c + d;
    }

    let result = addition(a, b);
    console.log("Result is :", result);
    
}
calculate(10, 5);


