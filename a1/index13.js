const prod = [
    { id: 1, name: "prod1", price: 1000 },
    { id: 2, name: "prod2", price: 2000 },
    { id: 3, name: "prod3", price: 3000 }
];

const newprod = prod.map(element=>({name:element.name,price:element.price+5}));
newprod.forEach(el1=>{
    console.log(el1.name+" "+el1.price);
})
