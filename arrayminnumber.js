let hights=[20,50,400,600,101,1,5];

function getmin(numbers)
{   
    let min=numbers[0];
    for(let num of numbers)
    {
        if(min>num)
        {
            min=num;
        }
    }
    return min;
}
const smallnuumber=getmin(hights);
console.log(smallnuumber);