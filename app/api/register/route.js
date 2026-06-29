import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req) {
  const limit = rateLimit(req);
  if (!limit.success) {
    return new Response(JSON.stringify({ error: limit.message }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    const { firstName, lastName, age, email, phone, insurance, state, contact, reason } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone  || !state || !contact  || !reason) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Save lead to database
    await prisma.lead.create({
      data: {
        source: 'register',
        firstName,
        lastName,
        email,
        phone,
        state,
        reason,
        data: JSON.stringify({ age, insurance, contact }),
      },
    });

    // Mailtrap SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV !== 'development',
      },
    });

    const mailOptions = {
      from: `"${process.env.NAME}" <${process.env.SMTP_FROM}>`,
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
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Preferred Contact:</strong> ${contact}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error("Error sending email:", error);
    }
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
