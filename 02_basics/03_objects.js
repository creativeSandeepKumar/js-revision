

const mySum = Symbol("key");

const JsUser = {
    name: "Hitesh",
    fullName: "Hitesh Choudhary",
    [mySum]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySum]);

JsUser.email = "hitesh@chatgpt.com";

Object.freeze(JsUser);
JsUser.email = "hitesh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())