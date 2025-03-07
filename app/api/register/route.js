import nodemailer from 'nodemailer';

// Handle POST request
export async function POST(req) {
  const formData = await req.json();

  const { firstName, lastName, age, email, phone, insurance, states, contact, reason } = formData;

  // Set up the transporter for Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'danicarepsych@gmail.com', // Your Gmail email address
      pass: 'qrjh fvdo spue eogc' // Your Gmail app password (if using 2FA)
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'danicarepsych@gmail.com', // Your Gmail address
    to: 'hello@mydanicare.com', // Recipient email
    subject: 'New Patient Registration - DaniCare',
    html: `
      <h3>New Patient Registration</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Insurance Provider:</strong> ${insurance}</p>
      <p><strong>State:</strong> ${states}</p>
      <p><strong>Preferred Contact:</strong> ${contact}</p>
      <p><strong>Reason for Visit:</strong> ${reason}</p>
    `,
  };

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully');
    
    // Return success response
    return new Response(
      JSON.stringify({ message: 'Thank you for your submission! We will contact you shortly.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Return error response
    return new Response(
      JSON.stringify({ error: 'Error: Unable to send message. Please try again.' }),
      { status: 500 }
    );
  }
}
