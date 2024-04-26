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
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
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
