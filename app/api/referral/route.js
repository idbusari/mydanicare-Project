import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.json();

    if (!formData.firstName || !formData.lastName || !formData.email) {
      return new Response(
        JSON.stringify({ error: "Please fill in all required fields." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    
   // SMTP configuration
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


    // Email content
    const mailOptions = {
      from: `"${process.env.NAME}" <${process.env.RECIPIENT_EMAIL}>`, // Sender's email
      to: process.env.RECIPIENT_EMAIL, 
      subject: "New Patient Referral",
      html: `
        <h1>New Patient Referral</h1>
        <p><strong>Patient's Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Date of Birth:</strong> ${formData.dob}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>State:</strong> ${formData.state}</p>
        <p><strong>Insurance:</strong> ${formData.insurance}</p>
        <p><strong>Reason for Referral:</strong> ${formData.reason || "N/A"}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ message: "Referral submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send referral. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
