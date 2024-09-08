// taable =10 cft
// almira=15 cft
// bookself=5cft

function gettotalwood( tabal, almira,bookself)
{
    let unittabal =15;
    let unitalmira=10;
    let unitbookself=11;

    let totalwoodtabal=tabal*unittabal;
    let totalwoodtalmiara=almira*unitalmira;
    let totalwoodbookself=bookself*unitbookself;

    let totalwood=totalwoodbookself+totalwoodtabal+totalwoodtalmiara;

    return totalwood;
}
const totalwoodcost=gettotalwood(2,2,3);
console.log(totalwoodcost);