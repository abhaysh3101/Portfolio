require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5011;

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

if (process.env.NODE_ENV !== "production") {
  contactEmail.verify((error) => {
    if (error) console.error("Email transporter error:", error);
    else console.log("Email transporter is ready");
  });
}

app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const name = `${firstName} ${lastName}`;

  const adminEmailTemplate = `
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
      <div style="background: #007bff; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2>New Contact Form Submission</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
        <p style="font-size: 16px; color: #333;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 5px solid #007bff; border-radius: 5px;">
          <p style="font-size: 16px; color: #555; margin: 0;">${message}</p>
        </div>
      </div>
      <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 14px; color: #555; border-radius: 0 0 8px 8px;">
        This email was sent via the Portfolio Contact Form.
      </div>
    </div>
  `;

  const userEmailTemplate = `
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
      <div style="background: #28a745; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2>Thank You, ${firstName}!</h2>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #333;">I appreciate you reaching out. I have received your message and will get back to you as soon as possible.</p>
        <p style="font-size: 16px; color: #333;"><strong>Your Message:</strong></p>
        <div style="background: #f8f9fa; padding: 15px; border-left: 5px solid #28a745; border-radius: 5px;">
          <p style="font-size: 16px; color: #555; margin: 0;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 16px; color: #333;">If you have any urgent inquiries, feel free to reply to this email.</p>
      </div>
      <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 14px; color: #555; border-radius: 0 0 8px 8px;">
        Best regards,<br><strong>Abhay Sharma</strong><br><a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff;">${process.env.EMAIL_USER}</a>
      </div>
    </div>
  `;

  try {
    await contactEmail.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "abhaysh3101@gmail.com",
      replyTo: email,
      subject: "Contact Form Submission - Portfolio",
      html: adminEmailTemplate,
    });

    await contactEmail.sendMail({
      from: `"Abhay Sharma" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Me!",
      html: userEmailTemplate,
    });

    res.status(200).json({ status: "Message Sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;