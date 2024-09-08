let products=[
    {
        name:'shampo', price:250, quntity :2
    },

    {
        name:'body wash', price:150, quntity :2
    },

    {
        name:'vam', price:50, quntity :1
    },

    {
        name:'wheel', price:25, quntity :4
    },

    {
        name:'body spray', price:250, quntity :4
    },
]


function gettotalamount(products)
{
    let totalamount=0;
    for(let product of products)
    {
        totalamount+=product.price*product.quntity;
    }
    return totalamount;
}

const lostmoney=gettotalamount(products);
console.log(lostmoney);