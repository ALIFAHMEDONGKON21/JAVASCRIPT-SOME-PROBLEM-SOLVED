function Multiply(x,y)
{
    const mul=x*4;
    const mul2=y*4;
    return mul ,mul2;

}
// let ans=Multiply(4,8)
// console.log(ans);



// function name(){
// 
// }



// call the function





function vaatKhao() {
    console.log('hand wash kore aso');
    console.log('boso');
    console.log('plate e khabar dhabar nao');
    console.log('gopat gopat kore khao');
}

// vaatKhao();


// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square(number) {
    console.log('value of the number parameter', number);
    const borgo = number * number;
    console.log('square of the given number is: ', borgo);
}
// square(4);
// console.log('--------------')
// square(12);
// square(5);
// square(405);

function add(num1, num2) {
    const sum = num1 + num2;
    console.log(sum);
}

// add(5, 71);
// add(65, 31);


function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log(a, b, c, d, e);
    console.log(total);
}

// addAll(3, 4, 6, 7);
// addAll(3, 4, 6, 7, 8);


function sum(num1,num2)
{
    let numsum=num1+num2;
    return numsum;

}
// let ssum=sum(5,7);
// console.log(ssum);
// console.log(sum(5,7));

// let mymoney =1000;
// let cost =700;
// let Frutren=mymoney-cost;
// console.log(Frutren);


// Mathematics, Biology, Chemistry, Physics, and Bangla 
let Mathematics=75.25,Biology=65,Chemistry=80,Physics=35.45,Bangla=99.45;
let sumNumber=Mathematics+Biology+Chemistry+Physics+Bangla;
let avg=parseFloat(sumNumber/5);
console.log(avg);


let number=119;
let rem=number%5;
console.log(rem);



var a1 = isNaN('11');
console.log(a1);
var a2 = isNaN(2-10);
console.log(a2)