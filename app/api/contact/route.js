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
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  await prisma.lead.create({
    data: {
      source: 'contact',
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' '),
      email,
      message,
    },
  });

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
      from: `"${process.env.NAME}" <${process.env.SMTP_FROM}>`,
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
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error("Error sending email:", error);
    }
    return new Response(
      JSON.stringify({ error: "Failed to send email." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
