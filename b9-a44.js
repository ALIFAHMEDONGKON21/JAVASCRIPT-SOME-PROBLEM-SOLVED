function getpasswordgen(obj)
{   
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().lenght !==4)
    {
        return "inviled";
    }
    let fristpostionpassword=obj.siteName[0].toUpperCase()+obj.siteName.slice(1);
    let passwordget=fristpostionpassword+'#'+obj.name+'@'+obj.birthYear;
    return passwordget;
}

console.log(getpasswordgen({ name: "toky", birthYear: 200, siteName: "Facebook" }))