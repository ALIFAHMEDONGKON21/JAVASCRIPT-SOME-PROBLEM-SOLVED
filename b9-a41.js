function calculateMoney(ticketSale)
{
    if( ticketSale <0 || typeof ticketSale !== 'number')
    {
        return"Invalid Number";
        
    }
    return ticketSale*120 -(500 + 50*8);
}
console.log(calculateMoney(10));
console.log(calculateMoney(-130));