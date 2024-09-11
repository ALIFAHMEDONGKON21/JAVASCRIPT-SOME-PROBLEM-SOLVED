function calculateFinalScore(obj) {
    if(typeof obj !== 'object')return"Invalid Input";
    let secore=obj.testScore+obj.schoolGrade;
    if(obj.isFFamily)
    {
        secore+=20;
    }
   return secore >=80?true:false;

}
console.log(calculateFinalScore("hello"))