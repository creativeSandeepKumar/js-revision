
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "hitesh",
            lastName: "choudhary",
        }
    }
}

console.log(regularUser.fullName.userFullName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4);
const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
];

user[1].email;

const course = {
    courseName: "JS IN HINDI",
    price: "999",
    courseIntructor: "hitesh",
}

console.log(course.courseIntructor);

const {courseIntructor: instrucotr} = course;

console.log(instrucotr);

// {
//     "name": "hitesh",
//     "courseName": "JS IN HINDI",
//     "price": "free",
// }
[
    {},
    {},
    {},
]