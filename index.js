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

/************************************ Q. no 4************************************ */


let employeeData=[{name:"Alice",tasksCompleted:9,rating:4.5,},
                  {name:"Jack",tasksCompleted:12,rating:4.9,},
                  {name:"Imily",tasksCompleted:5,rating:3.5,},
                  {name:"July",tasksCompleted:6,rating:3.6,},
                  {name:"Bob",tasksCompleted:15,rating:5.0,},
                  {name:"Jems",tasksCompleted:7,rating:2.9,},
                
                ];

let filterData = employeeData.filter((ele)=> ele.tasksCompleted>5);
console.log(filterData);

let newData=employeeData.map((ele)=>{
    return {
        name:ele.name,
        PerformanceLevel:ele.rating>4.5?"Excellent":ele.rating>3&&ele.rating<=4.5?"Good":"Needs Improvement"
    }
})
//console.log(newData)
newData.sort((a,b)=>{
    if(a.PerformanceLevel>b.PerformanceLevel){
        return 1
    }
    else{
        return -1

    }
})
console.log(newData)


/*********************************** Q. no 3************************** */

let Product =["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

let countItems= Product.reduce((acc,category)=>{
    acc[category] = acc[category] == undefined ? 1 : acc[category] + 1;
    return acc;
},{});
console.log(countItems)