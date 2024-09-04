const numbers = [12, 98, 5, 41, 23, 78, 46];
const newnumber=[];

for(let i=0; i<numbers.length-1; i++)
{
    if(numbers[i]%2==0)
    {
        newnumber.push(numbers[i]);
    }
}
console.log(newnumber);