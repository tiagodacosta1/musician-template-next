// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Replace with your email provider
    auth: {
      user: "your-email@gmail.com", // Your email address
      pass: "your-email-password", // Your email password or app password
    },
  });

  // Email message options
  const mailOptions = {
    from: email, // The email address of the person filling out the form
    to: "tiagocosta4823@gmail.com", // The email address where the message will be sent
    subject: `New message from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending message" }), {
      status: 500,
    });
  }
}
