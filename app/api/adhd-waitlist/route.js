import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, state, forWhom, notes } = await req.json();

    if (!firstName || !lastName || !email || !phone || !state) {
      return new Response(
        JSON.stringify({ error: 'All required fields must be filled.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"${process.env.NAME}" <${process.env.SMTP_FROM}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New ADHD Testing Waitlist Sign-Up',
      html: `
        <h3>New ADHD Testing Waitlist Submission</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Assessment for:</strong> ${forWhom || 'Not specified'}</p>
        <p><strong>Additional notes:</strong> ${notes || 'None'}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'You have been added to the waitlist!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('ADHD waitlist error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
