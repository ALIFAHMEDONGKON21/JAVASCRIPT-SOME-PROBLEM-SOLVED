function deletedinviled(array)
{
    if(Array.isArray(array) === false)
    {
        return "inviled array";
    }
    let newarray=[];
    for(let item of array)
    {
       if( typeof item === 'number' && item !== isNaN)
       {
        newarray.push(item);
       }
    }
    return newarray;
}
console.log(deletedinviled([1,5,5,6,8,null]));