
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
};

sayMyName();

function addTwoNumbers(number1, number2){
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log("Result: " + result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged In`;
}

console.log(loginUserMessage("hitesh"));

function calculatePrice(val1, val2, ...num1){
    return num1;
}

console.log(calculatePrice(300, 500, 600));

const user = {
    username: "hitesh",
    prices: 199
};

const myNewArray = [200, 400, 100, 600];

function returnScondValue(getArray){
    return getArray[1];
}


console.log(returnScondValue(myNewArray));