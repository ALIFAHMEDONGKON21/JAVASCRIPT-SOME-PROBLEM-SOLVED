function checkDigitsInName(name) {
    if(typeof name !== 'string')
    {
        return"Invalid Input"
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

console.log(checkDigitsInName('e1mu3'));
