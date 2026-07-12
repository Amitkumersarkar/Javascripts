const products = [
    { name: "xiaomi note 15 pro", brand: "Xiaomi", color: "blue", price: 500 },
    { name: "Iphone 17 pro max", brand: "Xiaomi", color: "blue", price: 1500 },
    { name: "vivo x300 pro", brand: "Xiaomi", color: "blue", price: 900 },
    { name: "samsung galaxy s26 ultra", brand: "samsung", color: "blue", price: 1200 }
]

const items = products.map(prod => prod.price);
console.log(items);