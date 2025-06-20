// // Obligatory Type Basic lesson

// // let myName = "khan" javascript syntax
// let myName: string = "khan" //TypeScript syntax

// // let numberOfWheels = 2 // js syntax
// let numberOfWheels: number = 2 // Ts stntax

// // let isStudent = false // js syntax boolean
// let isStudent: boolean = false // Ts syntax

// // custom types 
// type Adress = {
//   street: string
//   city: string
//   country: string

// }
// type Person = {
//   name: string
//   age: number
//   isStudent: boolean
//   // adress: Adress
//   adress?: Adress

// }

// let person1: Person = {
//   name: "joe",
//   age: 42,
//   isStudent: true,
//   adress:
//   {
//     street: "123 street",
//     city: "hyderabad",     //nested object
//     country: "india"
//   }
// }

// let person2: Person = {
//   name: "jill",
//   age: 66,
//   isStudent: false, // beneift of using type this error shows we dont have isstudent in type person now i am switching  to isStudent instead
//   adress:
//   {
//     street: "123 street",
//     city: "hyderabad",        // nested object 
//     country: "india"
//   }
// }

// function displayInfo(person) {
//   console.log(`${person.name} lives at ${person.adress.street}`);

// }
// displayInfo(person1)

//Type arrays

// type Person = {
//   name: string
//   age: number
//   isStudent: boolean
// }

// let person1: Person = {
//   name: "joe",
//   age: 42,
//   isStudent: true,

// }

// let person2: Person = {
//   name: "jill",
//   age: 66,
//   isStudent: false, // beneift of using type this error shows we dont have isstudent in type person now i am switching  to isStudent instead
// }

// let people: Array<Person> = [person1, person2]


//Literal types

// let myName = "khan" // with let i can change my value to any datatype
// const myName2: "Akbar" = "Akbar" // with const i can't and leteral type
// // const myName2: "khan"= "Akbar" // here i can't change my lieral type and string used they should be same

// //Unions
// type User = {
//   username: string
//   role: "guest" | "member" | "admin"
// }
// type UserRole = "guest" | "member" | "admin"

// let userRole: UserRole = "member"

//function return types

// type UserRole = "guest" | "member" | "admin"
// type User = {
//   username: string
//   role: UserRole
// }

// const users: User[] = [
//   { username: "john_doe", role: "member" },
//   { username: "john_doe", role: "admin" },
//   { username: "john_doe", role: "guest" }
// ]

// function fetchUserDetails(username: string): User {
//   const user = users.find(user => user.username === username)
//   if (!user) {
//     throw new Error(`User with username ${username} not found`)
//   }
//   return user
// }


// //what is Ts specific: types any

// // let age = 10
// // age = "khan" // warning to not assign a string to a number from ts

// //but to go ahead we use any so it doesnot show any error
// let age: any = 10
// age = "khan"  //use of any type

// //we should not use any perphaps in cases like to avoid temporary errors we use any



//utility types and partial
/*
type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>  // Partial set the type to optional & reduces code $ time

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id)
  if (!foundUser) {
    console.log("No user Found");
    return
  }

  Object.assign(foundUser, updates)
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users);
*/

//Omit utility type
type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type UpdatedUser = Partial<User>  // Partial set the type to optional & reduces code $ time

let nextUserId = 1
const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id)
  if (!foundUser) {
    console.log("No user Found");
    return
  }

  Object.assign(foundUser, updates)
}


function addNewUser(newUser: Omit<User, "id">): User {  //to make only one property optional we use omit
  const user: User = {
    id: nextUserId++,
    ...newUser
  }
  users.push(user)
  return user
}

addNewUser({ username: "joe-schmoe", role: "member" })

console.log(users);



