let hights=[110, 225,330,500,400,20,30,50,40];

function getmax(numbers)
{
    let max=numbers[0];
    for(let num of numbers)
    {
        if(num >max)
        {
            max=num;
        }
    }
    return max;
}

const bigerhight=getmax(hights);
console.log(bigerhight);