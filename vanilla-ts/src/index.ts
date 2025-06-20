type Pizza = {
  id: number
  name: string
  price: number
}

type Order = {
  id: number
  pizza: Pizza
  status: "ordered" | "completed"

}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1


const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
]



const orderHistory: Array<Order> = []


function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza)
  return newPizza
}


function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
  if (!selectedPizza) {
    console.error("Pizza not found", pizzaName);
    return;
  }
  cashInRegister += selectedPizza.price
  const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
  orderHistory.push(newOrder)
  return newOrder

}

function completeOrder(orderId: number): Order | undefined {
  const order = orderHistory.find(order => order.id === orderId)
  if (!order) {
    console.error(orderId, "Not found")
    return
  }
  order.status = "completed"
  return order
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
  } else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier)
  } else {
    throw new TypeError("Parameter `identifier` must be either a string or a number")
  }

}

// GENERIC function to get an item by ID
function getItemById<T extends { id: number }>(array: T[], id: number): T | undefined {
  return array.find(item => item.id === id)
}

// GENERIC function to get an item by name (if it has a `name` property)
function getItemByName<T extends { name: string }>(array: T[], name: string): T | undefined {
  return array.find(item => item.name.toLowerCase() === name.toLowerCase())
}

// Example usage of generic functions
const foundPizzaById = getItemById(menu, 2)
const foundPizzaByName = getItemByName(menu, "Pepperoni")


console.log("Pizza by ID:", foundPizzaById)
console.log("Pizza by Name:", foundPizzaByName)

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderHistory)






