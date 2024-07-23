
class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User("hitesh");
console.log(User.createId());
// console.log(hitesh.createId());

class Teacher extends User {
        constructor(username, email){
            super(username);
            this.email = email;
        }   
}
const iPhone = new Teacher("iPhone", "i@phone.com");
// console.log(iPhone.createId());
console.log(Teacher.createId());