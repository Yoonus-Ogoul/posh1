require('dotenv').config();
const sgMail = require('@sendgrid/mail')
const sendUserEmail = async (type, email) => {
	const subject = 'Payment';
	let textSuccess;
	let recipientEmail;
	let senderEmail;
  
	if (type === 'user') {
	  recipientEmail = email;
	  senderEmail = 'myounes@ogoul.com';
	  textSuccess = `Hi,Congratulations! You have successfully paid for your purchase. Thank you for your business!`;
	} else if (type === 'admin') {
	  recipientEmail = process.env.ADMIN_EMAIL;
	  senderEmail = email;
	  textSuccess = `Hi,A customer has just made a payment on your store. Here are the details:Customer Email:Thank you for using our service!`;
	} else {
	  console.error('Invalid email type');
	  return;
	}
  
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
	const msg = {
	  to: recipientEmail,
	  from: senderEmail,
	  subject: subject,
	  html: textSuccess,
	};
  
	sgMail
	  .send(msg)
	  .then(() => {
		console.log('Email sent');
	  })
	  .catch((error) => {
		console.error(error);
	  });
  };
  
module.exports = sendUserEmail;