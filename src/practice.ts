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

type Person = {
  name: string
  age: number
  isStudent: boolean
}

let person1: Person = {
  name: "joe",
  age: 42,
  isStudent: true,

}

let person2: Person = {
  name: "jill",
  age: 66,
  isStudent: false, // beneift of using type this error shows we dont have isstudent in type person now i am switching  to isStudent instead
}

let people: Array<Person> = [person1, person2]


//Literal types

let myName = "khan" // with let i can change my value to any datatype
const myName2: "Akbar" = "Akbar" // with const i can't and leteral type
// const myName2: "khan"= "Akbar" // here i can't change my lieral type and string used they should be same

//Unions
type User = {
  username: string
  role: "guest" | "member" | "admin"
}
type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "member"

