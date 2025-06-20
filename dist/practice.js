"use strict";
// // Obligatory Type Basic lesson
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { username: "john_doe", role: "member" },
    { username: "john_doe", role: "admin" },
    { username: "john_doe", role: "guest" }
];
function fetchUserDetails(username) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User with username ${username} not found`);
    }
    return user;
}
//what is Ts specific: types any
// let age = 10
// age = "khan" // warning to not assign a string to a number from ts
//but to go ahead we use any so it doesnot show any error
let age = 10;
age = "khan"; //use of any type
//we should not use any perphaps in cases like to avoid temporary errors we use any
