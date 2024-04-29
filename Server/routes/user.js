import express from "express";
import User from "../db/models/User.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({
      fullName: user.name,
      email: user.email,
      age: user.age,
      periodCycle: user.periodCycle,
      lastPeriod: user.lastPeriod,
      weight: user.weight,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

router.put("/", verifyToken, async (req, res) => {
  try {
    const { name, age, periodCycle, lastPeriod, weight } = req.body;
    const parsedWeight = parseFloat(weight.replace("kg", ""));
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { name, age, periodCycle, lastPeriod, weight: `${parsedWeight}kg` },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

router.delete("/", verifyToken, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "An unexpected error occurred." });
  }
});

export default router;
