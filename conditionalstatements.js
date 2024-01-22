//1.if 
let isRainy = true;

if (isRainy) {
    console.log("Don't forget your umbrella!");
}

//2.if-else
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}


//3.nested-if
let temperature = 25;
let isSunny = true;

if (temperature > 20) {
    if (isSunny) {
        console.log("It's a hot and sunny day!");
    } else {
        console.log("It's hot, but not sunny.");
    }
} else {
    console.log("It's not very hot today.");
}


//4.switch-case
let playerPosition = "midfielder";
let positionDescription;

switch (playerPosition) {
    case "goalkeeper":
        positionDescription = "The player who defends the goal.";
        break;
    case "defender":
        positionDescription = "The player who guards against opposing players.";
        break;
    case "midfielder":
        positionDescription = "The player who controls the ball in the middle of the field.";
        break;
    case "forward":
        positionDescription = "The player who tries to score goals.";
        break;
    default:
        positionDescription = "Unknown position.";
}

console.log("The",playerPosition,"is",positionDescription);


//5.Ternary Operator
let isRaining = false;

let weatherStatus = isRaining ? "Bring an umbrella" : "No need for an umbrella";
console.log(weatherStatus);