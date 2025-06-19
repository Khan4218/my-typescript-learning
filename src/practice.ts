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

let person = {
  name: "joe",
  age: 42,
  isStudent: true
}

let person2 = {
  name: "jill",
  age: 66,
  isstudent: false
}