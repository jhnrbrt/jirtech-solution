import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // serve index.html

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: `📩 New Contact Form Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("<h2 style='text-align:center;color:green;'>Message sent successfully! ✅</h2>");
  } catch (error) {
    console.error(error);
    res.send("<h2 style='text-align:center;color:red;'>Message failed ❌. Please try again.</h2>");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
