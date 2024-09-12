function calculateTax(income, expenses) {
    if(income>=0 || expenses>=0 || income>expenses)
    {
        return"Invalid Input";
    }
    let saveing=income-expenses;
    let tax=parseFloat(saveing *.20);
    return tax;
}
function sendNotification(email) {
    if (email.indexOf('@') === -1) {
       return "Invalid Email";
   }
 
    let emaildivided =email.split('@');
 
    let useename=emaildivided[0];
    let domaian=emaildivided[1];
 
    return `${useename} sent you an email from ${domaian}`;
 
 }
 function checkDigitsInName(name) {
    if(typeof name !== 'string')
    {
        return"Invalid Input"
    }
   for(let item of name)
   {
    if(item >=0 && item<=9)
    {
        return true;
    }
   }
   return false;
   
}
function calculateFinalScore(obj) {
    if(typeof obj !== 'object')return"Invalid Input";
    let secore=obj.testScore+obj.schoolGrade;
    if(obj.isFFamily)
    {
        secore+=20;
    }
   return secore >=80?true:false;

}
function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTime)!== true || typeof serialNumber !=='number')
    {
        return"Invalid Input";
    }
    let numberSize = waitingTimes.length;
    let totaltime=0;
    for(let time of waitingTimes)
    {
        totaltime+=time;
    }
    let perParsonWaitingTime=Math.round(totaltime/numberSize);
    let perParsonWaitingTimewithout=totaltime/numberSize;
    let totalmetingtime =perParsonWaitingTime*serialNumber;
    let notdonemetingtime=totalmetingtime-(perParsonWaitingTimewithout*numberSize);
    let mypoision=serialNumber-numberSize;
    let mypoisionlastone=serialNumber-numberSize-1;
    let lastperpsrsonwating=Math.round(notdonemetingtime/mypoision);
    return mypoisionlastone*lastperpsrsonwating;
}