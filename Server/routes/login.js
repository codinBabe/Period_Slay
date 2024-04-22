import express from "express";
import bcrypt from "bcrypt";
import User from "../db/models/User.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Validate input (e.g., check if email and password are provided)
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // Passwords match, login successful
    // Generate token (if using token-based authentication)

    // Respond with success message and/or token
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

export default router;
