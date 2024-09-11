function checkDigitsInName(name) {
   
   for(let item of name)
   {
    if(item >=0 && item<=9)
    {
        return true;
    }
   }
   return false;
   
}

console.log(checkDigitsInName('raa8'));
