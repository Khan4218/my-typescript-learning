"use strict";
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
const orderHistory = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error("Pizza not found", pizzaName);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    const order = orderHistory.find(order => order.id === orderId);
    if (!order) {
        console.error(orderId, "Not found");
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase === identifier.toLowerCase);
    }
    else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}
addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderHistory)
