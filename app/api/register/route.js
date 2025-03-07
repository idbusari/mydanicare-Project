import nodemailer from 'nodemailer';

export const POST = async (req) => {
  const formData = await req.json();  // Get form data from the request body

  // Create a transporter object using Gmail SMTP server
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,  // Use service from environment variables
    auth: {
      user: process.env.SMTP_USER,  // Use email from environment variables
      pass: process.env.SMTP_PASS,  // Use password from environment variables
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.SMTP_USER,  // Use the email from environment variables
    to: 'hello@mydanicare.com',  // The recipient's email address
    subject: 'New Patient Registration - DaniCare',
    html: `
      <h3>New Patient Registration</h3>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Age:</strong> ${formData.age}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Insurance Provider:</strong> ${formData.insurance}</p>
      <p><strong>State:</strong> ${formData.states}</p>
      <p><strong>Preferred Contact:</strong> ${formData.contact}</p>
      <p><strong>Reason for Visit:</strong> ${formData.reason}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return new Response('Thank you for your submission! We will contact you shortly.', {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Error: Unable to send message. Please try again.', {
      status: 500,
    });
  }
};
