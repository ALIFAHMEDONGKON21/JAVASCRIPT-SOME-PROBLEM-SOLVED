/*
frist 100=100;

second 100 garterthan=90;

thired 200 garter than =70;

*/


function layerediscount(quntity)
{
    let frist100=100;
    let second100gaterthan=90
    let thired200garterthab=70

    if(quntity<=100)
    {
        let total=quntity*100;
        return total
    }
    else if(quntity<=200)
    {
        let frist100price=quntity*100;
        let reminquntity=quntity-100;
        let reminorice=reminquntity*second100gaterthan;
        let secondtotal=frist100price+reminorice;
    }
    else
    {
        
    }
}