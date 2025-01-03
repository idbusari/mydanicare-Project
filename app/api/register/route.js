import nodemailer from "nodemailer";

export async function POST(req) {
  try {
   
    const { firstName, lastName, age, email, phone, insurance, reason } = await req.json();

   
    if (!firstName || !lastName || !email || !phone || !reason ) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), { status: 400 });
    }

 /*
    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      secure: true,
      auth: {
        user: "smtp@mailtrap.io",
        pass: "bf1e7d5571ba5f98db6be8af40ada43e",
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true, // Enable debug logs
    }); 
    */

    var transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port:587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
     // debug: true, 
  //logger: true, 

    });
  
    const mailOptions = {
      from: `"${process.env.NAME}" <${process.env.RECIPIENT_EMAIL}>`, // Sender's email
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
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    };

   
    const info = await transporter.sendMail(mailOptions);

   
    return new Response(JSON.stringify({ message: "Email sent successfully!", info }), { status: 200 });
  } catch (error) {
    
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), { status: 500 });
  }
}
