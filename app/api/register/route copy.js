import nodemailer from "nodemailer";

export async function POST(req) {
  try {
   
    const { firstName, lastName, age, email, phone, insurance } = await req.json();

   
    if (!firstName || !lastName || !email || !phone) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), { status: 400 });
    }

 
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "8c481c400154d9",
        pass: "39cb0cf24f4f18",
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true, // Enable debug logs
    });
  
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL, 
      subject: "New Patient Registration on DaniCare",
      html: `
        <h3>New Patient Registration</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Provider:</strong> ${insurance}</p>
      `,
    };

   
    const info = await transporter.sendMail(mailOptions);

   
    return new Response(JSON.stringify({ message: "Email sent successfully!", info }), { status: 200 });
  } catch (error) {
    
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), { status: 500 });
  }
}
