function checkName(name)
{
    if( typeof name === 'number' || Array.isArray === name )
    {
        return "invalid";
    }
 
let chackname=name.slice(-1).toLowerCase();
   if(chackname === 'a' || chackname ==='o' || chackname ==='e' || chackname ==='o' || chackname ==='u' || chackname ==='w')
   {
    return"good name"
   }
   else
   {
    return "bad name";
   }
}

// console.log(checkName("Rashe"));

function chackname2(names)

{   

    if( typeof names === 'number' || Array.isArray === names )
        {
            return "invalid";
        }
    let chacklastword=names.slice(-1).toLowerCase();
    const coditionchar=['a', 'e' ,'i', 'o', 'u','w'];

    let result=false;
    for( let char of coditionchar)
    {
        if(char === chacklastword) result=true;
    }
    return result ? "good man" : "bad man";
}
// console.log(chackname2(20));

function chackname3(names3)
{
    if( typeof names3 === 'number' || Array.isArray === names3 )
        {
            return "invalid";
        }
    let chacklastword=names3.slice(-1).toLowerCase();
    const coditionchar=['a', 'e' ,'i', 'o', 'u','w'];
    let result =coditionchar.includes(chacklastword);

     return result ? "good man" : "bad man"

}
console.log(names3("allsdla"))


