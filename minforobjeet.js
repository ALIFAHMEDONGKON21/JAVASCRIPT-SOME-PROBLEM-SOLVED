const phones=[
    {
        name:'sumsang' ,price:2000, ram:'8gb' ,network:'5G'
    },
    {
        name:'iphone' ,price:100000, ram:'8gb' ,network:'5G'
    },
    {
        name:'oneplus' ,price:15000, ram:'8gb' ,network:'5G'
    },
    {
        name:'IqoQ' ,price:11000, ram:'8gb' ,network:'5G'
    },
]

function getmin(phones)
{
    let min=phones[0];

    for(let phone of phones)
    {
        if(phone.price<min.price)
        {
            min=phone
        }
    }
    return min;
}

const gellowprice=getmin(phones);
console.log(gellowprice);