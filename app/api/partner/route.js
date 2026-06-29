import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rateLimit";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  const limit = rateLimit(request);
  if (!limit.success) {
    return new Response(JSON.stringify({ error: limit.message }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    const body = await request.json();

    const { name, email, organization, phone, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.lead.create({
      data: {
        source: 'partner',
        firstName: name.split(' ')[0],
        lastName: name.split(' ').slice(1).join(' '),
        email,
        phone: phone || null,
        data: JSON.stringify({ organization, message }),
      },
    });

    // SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: process.env.NODE_ENV !== 'development',
      },
    });
  

    // Email message options
    const mailOptions = {
      from: `"${process.env.NAME}" <${process.env.SMTP_FROM}>`, // Sender's email
      to: process.env.RECIPIENT_EMAIL, // Recipient's email (can be yourself or someone else)
      subject: `New Partnership Request from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error("Error sending email:", error);
    }
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
