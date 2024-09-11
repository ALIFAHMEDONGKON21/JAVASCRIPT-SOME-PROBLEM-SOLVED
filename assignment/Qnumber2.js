function sendNotification(email) {
   if(email.indexOf('@') === false)
   {
    return"Invalid Email";
   }

   let emaildivided =email.split('@')

   let useename=emaildivided[0];
   let domaian=emaildivided[1];

   return `${useename} sent you an email from ${domaian}`;

}
let lastans=sendNotification('alif@gamil.com')
console.log(lastans);
