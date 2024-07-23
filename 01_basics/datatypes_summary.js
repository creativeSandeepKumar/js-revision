// primitve

// 7 types - string, number, boolean, null, undefined, symbol, bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 234566566566n;

// reference(Non-Primitve)

// Array, Objects, funtions

const heroes = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "Hitesh",
    age: 22
};

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);