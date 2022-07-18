// Generate the users welcome message

const greeting = "Greetings traveler. Welcome to the Web. Your lucky numbers are in the following array:";
function displayMessage(message) {
    console.log(message);
}

// Generate the users lucky number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

const numbers = [];

for (let i = 0; i <= 7; i++) {
    numbers.push(getRndInteger(0, 9))
}


 
displayMessage(greeting);
console.log(numbers);


