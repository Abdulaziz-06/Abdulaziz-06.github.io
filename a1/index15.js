const prod = [
    { id: 1, name: "prod1", price: 1000, status: "pending" },
    { id: 2, name: "prod2", price: 2000, status: "pending" },
    { id: 3, name: "prod3", price: 3000, status: "pending" }
];

const updatedItems = prod.map(element => ({  ...element, price: element.price + 5, status: "complete"}));

updatedItems.forEach(el => {
    console.log(el.name + " " + el.price + " " + el.status);
});
