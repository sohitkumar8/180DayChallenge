// Nested Objects Example

let student = {
    name : "Sohit",
    age : 20,
    address : {
        state : "Bihar",
        city : "Patna",
        pincode : 800016
    }
};

// Accessing nested object properties
console.log(student.address.state); // Output: Bihar
console.log(student["address"]["city"]); // Output: Patna


// Objects Methods Example
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Calling the method
person.greet(); // Output: Hello, my name is John