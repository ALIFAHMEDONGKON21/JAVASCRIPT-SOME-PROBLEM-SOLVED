function  waitingTime(waitingTimes  , serialNumber) {

    if(Array.isArray(waitingTime)!== true || typeof serialNumber !=='number')
    {
        return"Invalid Input"
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


console.log(waitingTime("[6,2]", 9))