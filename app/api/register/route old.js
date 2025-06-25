import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      age,
      email,
      phone,
      insurance,
      state,
      contact,
      reason,
    } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !state || !contact || !reason) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), {
        status: 400,
      });
    }

    // Validate DOB format: MM/DD/YYYY or MM-DD-YYYY only
    const dobPattern = /^(0[1-9]|1[0-2])[-\/](0[1-9]|[12][0-9]|3[01])[-\/](19|20)\d{2}$/;
    if (!dobPattern.test(age)) {
      return new Response(
        JSON.stringify({
          error: "Invalid Date of Birth format. Use MM/DD/YYYY or MM-DD-YYYY.",
        }),
        { status: 400 }
      );
    }

    // Setup mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${process.env.NAME}" <${process.env.RECIPIENT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Patient Registration on DaniCare",
      html: `
        <h3>New Patient Registration</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Provider:</strong> ${insurance}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Preferred Contact:</strong> ${contact}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully!", info }), {
      status: 200,
    });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500 }
    );
  }
}
