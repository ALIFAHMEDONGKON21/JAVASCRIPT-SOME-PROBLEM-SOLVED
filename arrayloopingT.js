

// const newcolor=[];
// for(let i=colors.length-1; i>0; i--)
// {
//    newcolor.push(colors[i]);
    
// }
// console.log(newcolor);

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let newaray =[];
console.log(colors.length);

for( let i=colors.length-1; i>=0; i--)
{
   newaray.push(colors[i]);
}
console.log(newaray);

// console.log(newaray);

let numbers=[1,2,4,34,6,5,8,6];
let newarr=" ";

for(let number of numbers )
{
   if(number%2==0)
   {
      newarr.push(number);
   }
}
console.log(newarr);




