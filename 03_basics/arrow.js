const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);

function chai(){
    let username = "hitesh";
    console.log(this.username);
}

chai();

const chai1 = function (){
    let username = "hitesh";
    console.log(this.username);
}

chai1();

const chai2 = () => {
    let username = "hitesh";
    console.log(this);
}

chai2();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

const addTwo1 = (num1, num2) =>  num1 + num2;
const addTwo2 = (num1, num2) =>  (num1 + num2);
const addTwo3 = (num1, num2) =>  ({username: "hitesh"});;

console.log(addTwo(3, 4));
console.log(addTwo1(3, 4));
console.log(addTwo2(3, 4));
console.log(addTwo3(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();