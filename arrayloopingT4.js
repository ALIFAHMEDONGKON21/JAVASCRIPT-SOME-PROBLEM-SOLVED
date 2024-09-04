const statement = 'I am a hard working person';

let without=statement.split(' ');

let ressatatement=' ';

for(let i= without.length-1; i>=0; i--)
{

    ressatatement +=without[i];

    if(i>0) ressatatement +=' ';
}
console.log(ressatatement);