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

/***********************************  Q.No:2********************************** */

function processStudents(students) {
    // students who scored above 60 marks
    const filteredStudents = students.filter(student => student.marks > 60);
    // Sort the filtered array in descending order of marks
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
    // Map the sorted array to extract only the names
    const sortedNames = sortedStudents.map(student => student.name);

    return sortedNames;
}

const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];

const result = processStudents(students);
console.log(result);
