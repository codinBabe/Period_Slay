import express from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import User from "../db/models/User.js";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email." });
    }

    user.resetPasswordToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: user.email,
      subject: "Password Reset",
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\nhttps://period-slay.vercel.app/reset/${user.resetPasswordToken}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Password reset link has been sent." });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

export default router;
