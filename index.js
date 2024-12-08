function processProducts(products) {
    //map to extract product names
    const productNames = products.map(product => product.name);

    //forEach to iterate over the products and log messages
    products.forEach(product => {
        const message = product.price > 50 
            ? `${product.name} is above $50` 
            : `${product.name} is below $50`;
        console.log(message);
    });
}

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

processProducts(products);