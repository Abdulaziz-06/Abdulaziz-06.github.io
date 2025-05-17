// const prod = [
//     { id: 1, name: "prod1", price: 1000,qty:5, status: "pending" },
//     { id: 2, name: "prod2", price: 2000,qty:5, status: "pending" },
//     { id: 3, name: "prod3", price: 3000,qty:5, status: "pending" }
// ];

// const updatedItems = prod.map(element => ({  ...element, price: element.price + 5, status: "complete",quantity:element.qty,total:element.price*element.qty}));

// updatedItems.forEach(el => {
//     console.log(el.name + " " + el.price + " " + el.status + " " + el.total);
// // });


const products=[
    { id: 1, name: "apple",price: 34},
    { id : 2, name: "mango", price: 56},
    { id : 3, name: "orange",price: 43},
];

const cart={1:7,3:5}

products.filter(el=>cart[el.id]).map(value=>{
    const qty=cart[value.id];
    console.log(value.id,value.name,value.price,qty,value.price*qty);
})
