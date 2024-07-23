function SetUsername(username){
    this.username = username;
    console.log("called");
}

function createdUser(username, email, password){
    SetUsername.call(this, username);

    this.email = email
    this.password = password
}

const chai = new createdUser("chai", "chai@fb.com", "123");
console.log(chai);