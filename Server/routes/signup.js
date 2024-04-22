import express from "express";
import User from "../db/models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { name, email, password, confirmPassword } = req.body;

  // Validate password strength
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res
      .status(400)
      .json({ message: "Password does not meet requirements." });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance and save to the database
  try {
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error registering user." });
  }
});

export default router;
