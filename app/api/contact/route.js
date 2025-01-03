import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Configure the SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender's email
      to: process.env.RECIPIENT_EMAIL, // recipient email
      subject: "New Contact Form Message", // Subject line
      text: message, // plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`, // HTML body
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
