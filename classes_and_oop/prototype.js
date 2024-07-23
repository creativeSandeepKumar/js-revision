

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

heroPower.hitesh();
myHeroes.hitesh();
// heroPower.heyHitesh();
myHeroes.heyHitesh();

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com",
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAavailable: false,
}

const TASupport = {
    makeAssingment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.makeAssingment);
console.log(TASupport.fullTime);
console.log(TASupport.isAavailable);
console.log(TASupport.makeVideo);
console.log(TASupport.email);

let anotherUserName = "chaiAurCode    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();