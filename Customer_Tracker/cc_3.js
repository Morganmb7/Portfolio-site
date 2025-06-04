let customers = [
    {
        Name: "Isabella Smith",
        email: "Isabella.smith@gmail.com",
        Purchases: ["pre-workout gummies", "pump cover"],
    },
    {
        Name: "Liam Johnson",
        email: "Liam.Johnson@gmail.com",
        Purchases: ["protein powder", "pre-workout gummies", "pump cover"],
    },
    {
        Name: "Olivia Brown",
        email: "OBrown@gmail.com",
        Purchases: ["protein powder", "creatine"],
    },
    {
        Name: "Noah Wilson",
        email: "Noahballer176@gmail.com",
        Purchases: ["protein powder", "protein snacks", "wrist wraps"],}
];


console.log(customers);

customers.push({
    Name: "Emma Davis",
    email: "emma1826@gmail.com",
    Purchases: ["Creatine","wrist wraps"]

})

customers.shift();
console.log(customers);


customers[0].email = "LJohnson@gmail.com";

customers[1].Purchases.push("pre-workout gummies");

console.log(customers); 

customers.forEach(customer => {
    console.log(`Name: ${customer.Name}, Email: ${customer.email}, Total Purchases: ${customer.Purchases.length}`);
});






