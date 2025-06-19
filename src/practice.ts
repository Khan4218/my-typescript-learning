// // Obligatory Type Basic lesson

// let myName = "khan" javascript syntax
let myName: string = "khan" //TypeScript syntax

// let numberOfWheels = 2 // js syntax
let numberOfWheels: number = 2 // Ts stntax

// let isStudent = false // js syntax boolean
let isStudent: boolean = false // Ts syntax

// custom types 
type person = {
  name: string
  age: number
  isStudent: boolean
}

let person1: person = {
  name: "joe",
  age: 42,
  isStudent: true
}

let person2: person = {
  name: "jill",
  age: 66,
  isStudent: false  // beneift of using type this error shows we dont have isstudent in type person now i am switching  to isStudent instead
}