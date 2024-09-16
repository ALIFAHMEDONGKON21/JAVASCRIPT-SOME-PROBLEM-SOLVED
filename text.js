// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
// }


// // let  chack=areEqualCaseInsensitive('alif','alif');
// // console.log((chack));



// function namacall(num1,num2)
// {
//     console.log(num1+num2);
// }
// namacall(3,5);

// function numdiv(num1,num2)
// {
//     let div=num1/num2;
//     return div;

// }
// let ans=numdiv(25,5);
// console.log(ans);

function iseven(number)
{
    if(number%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
let ans3=iseven(8);
console.log(ans3)

function isodd(number)
{
    if(number%2 != 0)
    {
        return true
    }
    else
    {
        return false
    }
}
let ans=isodd(9);
// console.log(ans);


function tentimes(number)
{  
    let tengun=number*10;
    return tengun;   
}
let ans4=tentimes(10);
console.log(ans4);




function cuthalf(number1)
{
   let x=number1+5;

   let y=x-10;

   let z=y/4;
   return x;
}
let ans5=cuthalf(100);
// console.log(ans5);




function doubleit(number)
{
    let double=number*2;
    console.log(double ,number);
}
doubleit(8);



function twogun(number)
{   
    let x=number*2;
    return x;
}
let ans6=twogun(10);
console.log(ans6)