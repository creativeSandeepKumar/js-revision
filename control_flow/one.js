
const isUserLoggedIn = true;
const temperature =  41;

if(temperature ===  40){
    console.log("Temperature is 40 degrees");
} else {
    console.log("Temperature is not 40 degrees");
}

const score = 200;
if(score > 100){
    let power = "fly";
    console.log(`User power: ${power}`);
}

const balance = 1000;

if(balance > 500) console.log("test"), console.log("test 2")

    if(balance < 500){
        console.log("Less than 500");
    } else if(balance < 750){
        console.log("Less than 750");
    } else if(balance < 900){
        console.log("Less than 900");
    } else {
        console.log("Less than 1200");
    }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Alow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in");
}