// Object 

let person = {
    name : "Sohit",
    age : 20,
    isStudent : true,
    city : "Patna"
};

// Accessing object properties
console.log(person.name, person.city); // Sohit
console.log(person["name"], person["city"]); // Sohit


// Adding a new property
person.goal = "Front-end Developer";
console.log(person.goal); // Front-end Developer


// Updating an existing property
person.age = 21;
console.log(person.age); // 21

// Deleting a property
delete person.isStudent;

console.log(typeof(person)); // object

// checking if a property exists
console.log("age" in person); // true
console.log("isStudent" in person); // false

// Iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

