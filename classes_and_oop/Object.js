function multipliesBy5(num){
    return num*5;
}

multipliesBy5.power = 2;

console.log(multipliesBy5(5));
console.log(multipliesBy5);
console.log(multipliesBy5.power);
console.log(multipliesBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea = createUser("tea", 250);
chai.increment();
chai.printMe();
console.log(tea);