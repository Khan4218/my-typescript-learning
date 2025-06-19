// // Obligatory Type Basic lesson

// let myName = "khan" javascript syntax
let myName: string = "khan" //TypeScript syntax

// let numberOfWheels = 2 // js syntax
let numberOfWheels: number = 2 // Ts stntax

// let isStudent = false // js syntax boolean
let isStudent: boolean = false // Ts syntax

// custom types 
type Adress = {
  street: string
  city: string
  country: string

}
type Person = {
  name: string
  age: number
  isStudent: boolean
  // adress: Adress
  adress?: Adress

}

let person1: Person = {
  name: "joe",
  age: 42,
  isStudent: true,
  adress:
  {
    street: "123 street",
    city: "hyderabad",     //nested object
    country: "india"
  }
}

let person2: Person = {
  name: "jill",
  age: 66,
  isStudent: false, // beneift of using type this error shows we dont have isstudent in type person now i am switching  to isStudent instead
  adress:
  {
    street: "123 street",
    city: "hyderabad",        // nested object 
    country: "india"
  }
}

function displayInfo(person) {
  console.log(`${person.name} lives at ${person.adress.street}`);

}
displayInfo(person1)