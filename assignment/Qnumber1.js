function calculateTax(income, expenses) {
    if(income<=0 || expenses<=0)return "vul"
    let saveing=income-expenses;
    let tax=parseFloat(saveing *.20);
    return tax;
}

console.log(calculateTax(-10000, -3000))
