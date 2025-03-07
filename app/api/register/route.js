import { Client } from "@microsoft/microsoft-graph-client";
import "isomorphic-fetch";
import { ConfidentialClientApplication } from "@azure/msal-node";

// Configure MSAL (Microsoft Authentication Library)
const msalConfig = {
  auth: {
    clientId: process.env.O365_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.O365_TENANT_ID}`,
    clientSecret: process.env.O365_CLIENT_SECRET,
  },
};

// Create MSAL client
const cca = new ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
  try {
    const authResult = await cca.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });
    return authResult.accessToken;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw new Error("Failed to obtain access token.");
  }
}

export async function POST(req) {
  try {
    const { firstName, lastName, age, email, phone, insurance, states, contact, reason } = await req.json();

    if (!firstName || !lastName || !email || !phone || !states || !contact || !reason) {
      return new Response(JSON.stringify({ error: "All required fields must be filled." }), { status: 400 });
    }

    // Get Access Token
    const accessToken = await getAccessToken();

    // Create Microsoft Graph API client
    const graphClient = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });

    // Construct email message
    const message = {
      message: {
        subject: "New Patient Registration on DaniCare",
        body: {
          contentType: "HTML",
          content: `
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
        },
        toRecipients: [
          {
            emailAddress: {
              address: process.env.RECIPIENT_EMAIL, // Sending to hello@mydanicare.com
            },
          },
        ],
      },
    };

    // Send email using Microsoft Graph API
    await graphClient.api(`/users/${process.env.O365_USER}/sendMail`).post(message);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email. Please try again later." }), { status: 500 });
  }
}
