function sendNotification(email) {
   if (email.indexOf('@') === -1) {
      return "Invalid Email";
  }

   let emaildivided =email.split('@');

   let useename=emaildivided[0];
   let domaian=emaildivided[1];

   return `${useename} sent you an email from ${domaian}`;

}
let lastans=sendNotification('farhan34@yahoo.com')
console.log(lastans);
