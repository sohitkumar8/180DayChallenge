// Simple Calculator using switch statement.

const a = prompt("Enter first number:");
const o = prompt("Enter operator (+, -, *, /, %):");
const b = prompt("Enter second number:");

switch (o) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    default:
        console.log("Invalid operator");
        break;
}




// Day of the Week using switch statement.

let day = prompt("Enter a day:");

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        console.log("It's Tuesday, keep going!");
        break;
    case "Wednesday":
        console.log("Midweek already!");
        break;  

    case "Thursday":
        console.log("Almost the weekend!");
        break;
    case "Friday":
        console.log("It's Friday, the weekend is near!");
        break;
    case "Saturday":   
        console.log("It's Saturday, enjoy your day!");
        break;  
    case "Sunday":
        console.log("It's Sunday, relax and recharge!");
        break;
    default:
        console.log("Invalid day entered.");
        break;
}