import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rateLimit";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const limit = rateLimit(req);
  if (!limit.success) {
    return new Response(JSON.stringify({ error: limit.message }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    const { state, firstName, lastName, dob, phone, email, immstatus, immcase, others } = await req.json();

    // Validate required fields
    if (!state || !firstName || !lastName || !dob || !phone || !email || !others) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await prisma.lead.create({
      data: {
        source: 'imm',
        firstName,
        lastName,
        email,
        phone,
        state,
        dob,
        data: JSON.stringify({ immstatus, immcase, others }),
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
      from: `"${process.env.NAME}" <${process.env.RECIPIENT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Enquiries - Psychiatric Evaluation (Immigration)",
      html: `
        <h3>Psychiatric Evaluation Details</h3>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Immigration Status:</strong> ${immstatus}</p>
        <p><strong>Immigration Case:</strong> ${immcase}</p>
        <p><strong>Other Information:</strong> ${others}</p>
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
