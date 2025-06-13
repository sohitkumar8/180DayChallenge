// setTimeout() Function.

// Practice Task 1:
// console.log("Download started");

// setTimeout(() => {
//     console.log("Downloading...");
    
// }, 200)
// setTimeout(() => {
//     console.log("Download completed");
    
// }, 3000)


//  Callback Hell

// Practice Task 2:
//  Example (Real-life: Making Maggi 🍜 step-by-step)

// setTimeout(() => {
//     console.log("Step 1: Boil water");

//     setTimeout(() => {
//         console.log("Step 2: Add Maggi noodles");

//         setTimeout(() => {
//             console.log("Step 3: Add masala");

//             setTimeout(() => {
//                 console.log("Step 4: Cook for 2 minutes");

//                 setTimeout(() => {
//                     console.log("Step 5: Maggi is ready!");
//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);


// Promises — Easy Explanation

// let pizzaOrder = new Promise((resolve, reject) => {
//     let isPizzaReady = true;

//     if (isPizzaReady) {
//         resolve("🍕 Pizza Delivered!");
//     } else {
//         reject("❌ Pizza not ready");
//     }
// });

// pizzaOrder
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });



// Async / Await

//  Example: Movie Ticket Booking

// function bookTicket() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("🎟️ Ticket Booked!");
//         }, 2000); // 2 sec wait
//     });
// }

// async function startBooking() {
//     console.log("Booking started...");

//     let ticket = await bookTicket();  // waits for promise
//     console.log(ticket);
// }

// startBooking();



// 2. Example:

function getFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("🍲 Food is ready!");
        }, 2000);
    });
}

async function serve() {
    console.log("Preparing food...");
    let food = await getFood();
    console.log(food);
}
serve();

