import nodemailer from "nodemailer";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

// Set refresh token for OAuth2 authentication
oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export async function POST(req) {
  try {
    const { firstName, lastName, age, email, phone, insurance, states, contact, reason } = await req.json();

    if (!firstName || !lastName || !email || !phone || !states || !contact || !reason) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), { status: 400 });
    }

    // Generate OAuth2 access token
    const accessToken = await oauth2Client.getAccessToken();

    // Configure Microsoft 365 OAuth2 transporter
    const transporter = nodemailer.createTransport({
      service: "Outlook",
      auth: {
        type: "OAuth2",
        user: process.env.O365_USER, // Your Office 365 email
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `DaniCare <${process.env.O365_USER}>`,
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
        <p><strong>State:</strong> ${states}</p>
        <p><strong>Preferred Contact:</strong> ${contact}</p>
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
