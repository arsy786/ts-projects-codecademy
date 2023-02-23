"use strict";
/*
Let’s come back to the restaurant recommender. The restaurant managers gave feedback that they were looking for additional functionality to filter orders so they can highlight their specials on the app.

We’re going to build on top of the previous project to filter orders instead of restaurants. The restaurant managers want to surface dishes that fit within the customer’s budget and show the cost of each dish. The program will use array methods, functions, and practice good code hygiene and organization. Let’s work on it step by step and enjoy some chicken and waffles at the end!

Your finished program will filter orders by price and print out the orders and their prices like below:

Restaurant Name #1
- Order 1: $9.99
- Order 2: $8.99
Restaurant Name #2
- Order 1: $17.99
- Order 2: $15.99
*/
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(price) {
    switch (price) {
        case orders_1.PriceBracket.Low:
            return 10.0;
        case orders_1.PriceBracket.Medium:
            return 20.0;
        case orders_1.PriceBracket.High:
            return 30.0;
        default:
            return "None";
    }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
    let filteredOrders = [];
    orders.forEach((restaurant) => {
        const filteredForRestauraunt = restaurant.filter((order) => order.price <= getMaxPrice(price));
        filteredOrders.push(filteredForRestauraunt);
    });
    return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, filteredOrders) {
    filteredOrders.forEach((order, index) => {
        if (order.length > 0) {
            console.log(`${restaurants[index].name}`);
            order.forEach((item) => {
                console.log(`- ${item.name}: $${item.price}`);
            });
        }
    });
}
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
