function monthlySavings(arr , livingCost) {

    // You have to write your code here
    if(Array.isArray(arr) === false || typeof livingCost !=='number')
    {
        return "inviled";
    }

    let saveing=0;
    for(let prament of arr)
    {
       
        if(prament>=3000)
        {
            let tax=prament*0.2;
            saveing+=prament-tax;
        }
        else
        {
            saveing+=prament;
        }
        
    }
    return totalsaveing=saveing-livingCost
    if(totalsaveing>=0){
        return "more income need"
    }
    else
    {
        return totalsaveing;
    }
}

// console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))




for(let i=0; i<=100; i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
}


