function sum(num1,num2)
{

    if(typeof num1 !== 'number')
    { 
       return("give me intger number otherwise program not working");
    }
    else if(typeof num2 !== 'number')
    {
        return( " second give me intger number otherwise program not working");
    }
    const sum=num1+num2;
    return sum;
}
const finalsum=sum(8,'5');
console.log(finalsum);