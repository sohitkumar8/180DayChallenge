// callback function

// 1. Example

function greet(name){
    console.log(`Hello ${name}`);
    
}

function processUser(callback){
    let userName = "Sohit"
    callback(userName);
    
}
processUser(greet);



// 2. Example
function eat(food){
    console.log("Yummy! I am eating ", food);
    
}

function serveFood(callback) {
    let food = "Paneer Butter Masala"
    callback(food);
}
serveFood(eat)


// 3. Example
function uploadVideo(callback) {
    let videoTitle = "JavaScript Callback Explained";
    callback(videoTitle); // callback ko call kiya, jise notification bhejna tha
}

function notifyUser(title) {
    console.log("🔔 New Video Alert: " + title);
}
uploadVideo(notifyUser)


// Real-Life Situation: Job Application System
// function scheduleInterview(name){
//     console.log("Interview scheduled for", name );
    
// }
// function processApplication(callback){
//     let candidateName = "Sahil"
//     callback(candidateName);
// }
// processApplication(scheduleInterview);


//  Real-life Interview Example with Multiple Callbacks + prompt() Input

// 1️⃣ Function to verify the resume
// function verifyResume(name) {
//     console.log("✅ Resume verified for " + name);
// }

// // 2️⃣ Function to send confirmation email
// function sendEmail(name) {
//     console.log("📧 Email sent to " + name);
// }

// // 3️⃣ Function to schedule interview
// function scheduleInterview(name) {
//     console.log("📅 Interview scheduled for " + name);
// }

// // 4️⃣ Main function to process the candidate application
// function processApplication(candidateName, callback1, callback2, callback3) {
//     console.log("📥 Application received from " + candidateName);
//     callback1(candidateName);   // verifyResume
//     callback2(candidateName);   // sendEmail
//     callback3(candidateName);   // scheduleInterview
// }

// // 5️⃣ Take input from user (works in browser)
// let name = prompt("Enter candidate name:"); // You can try "Sohit", "Ravi", etc.

// processApplication(name, verifyResume, sendEmail, scheduleInterview);


// Fast Food Order System:

// let name = prompt("Enter a customer name:");

function verifyOrder(name){
    console.log("Verify order for "+ name);
    
}
function prepareFood(name) {
    console.log("Food prepared for "+ name);
    
}
function deliverOrder(name){
    console.log("Order delivered to ", name);
    
}

function processOrder(callback1, callback2, callback3){
    let customerName = "Ravi"
    console.log("Order received from ", customerName);
    
    callback1(customerName);
    callback2(customerName);
    callback3(customerName);
}
processOrder(verifyOrder, prepareFood, deliverOrder);