const prod = [
    { id: 1, name: "prod1", price: 1000 },
    { id: 2, name: "prod2", price: 2000 },
    { id: 3, name: "prod3", price: 3000 }
];

const element = prod.map((element) => {
    element.price += 5;
    console.log(element.name + " " + element.price);
    
});
