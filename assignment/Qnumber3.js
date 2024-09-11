function checkDigitsInName(name) {
    
    if(Array.isArray(name) === true || typeof name ==='number' || typeof name ==='object' || typeof name ==='boolean')
    {
        return"Invalid Input";
    }
   
   for(let item of name)
   {
    if(item >=0 && item<=9)
    {
        return true;
    }
   }
   return false;
   
}

console.log(checkDigitsInName('!@#'));
