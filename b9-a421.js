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
console.log(chackname3("allsdla"))