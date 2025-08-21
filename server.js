import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));

// API: contact form
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    res.send("✅ Message sent successfully!");
  } catch (err) {
    console.error("❌ Email Error:", err);
    res.status(500).send("Error sending message.");
  }
});

// ✅ Catch-all: send index.html for any route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Railway must bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 JirTech Solution running on port ${PORT}`);
});
