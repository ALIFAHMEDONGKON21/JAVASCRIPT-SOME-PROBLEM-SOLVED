function calculateTax(income, expenses) {
    if(income>=0 || expenses>=0 || income>expenses)
    {
        return"Invalid Input";
    }
    let saveing=income-expenses;
    let tax=parseFloat(saveing *.20);
    return tax;
}

console.log(calculateTax(-5000, 2000))
