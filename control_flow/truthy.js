
const userEmail = [];

if(userEmail){
    console.log("Got user email");
} else {
    console.log("No user email found")
}

// falsy values - 0, "", null, undefined, false, NaN, -0, BigInt

// truthy values
// "0", "false", " ", {},[], function({})

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// nullish coalescing (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 13;
val1 = null ?? 10 ?? 15;
console.log(val1)

// ternary - condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");