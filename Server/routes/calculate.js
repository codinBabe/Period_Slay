import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import PeriodInfo from "../db/models/PeriodInfo.js";

const router = express.Router();
router.post("/", verifyToken, async (req, res) => {
  const { firstDayLastPeriod, averageCycleLength, lastPeriodDuration } =
    req.body;
  const userId = req.userId;
  const existingEntry = await PeriodInfo.findOne({ userId });
  if (existingEntry) {
    return res.status(409).json({ error: "User has already filled the form." });
  }
  if (averageCycleLength < 21 || averageCycleLength > 35) {
    return res.status(400).json({
      error: "Average cycle length should be between 21 and 35 days.",
    });
  }
  if (lastPeriodDuration < 2 || lastPeriodDuration > 7) {
    return res.status(400).json({
      error: "Last period duration should be between 2 and 7 days.",
    });
  }
  const nextPeriodDate = new Date(firstDayLastPeriod);
  nextPeriodDate.setDate(
    nextPeriodDate.getDate() + parseInt(averageCycleLength)
  );

  const ovulationDate = new Date(nextPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() - 14);

  try {
    const periodDocs = new PeriodInfo({
      userId,
      lastPeriodDate: firstDayLastPeriod,
      periodCycle: averageCycleLength,
      nextPeriodDate,
      ovulationDate,
    });
    await periodDocs.save();
    res.json({ periodDocs: periodDocs });
  } catch (error) {
    res.status(500).json({ error: "Error saving Period data" });
  }
});

router.get("/", verifyToken, async (req, res) => {
  const userId = req.userId;
  try {
    const periodDocs = await PeriodInfo.find({ userId });
    res.json(periodDocs);
  } catch (error) {
    console.error("Error fetching period data:", error);
    res.status(500).json({ error: "Error fetching period data" });
  }
});

router.delete("/", verifyToken, async (req, res) => {
  const userId = req.userId;
  try {
    const deletedDocs = await PeriodInfo.deleteOne({ userId });
    if (deletedDocs.deletedCount > 0) {
      res.json({ message: "Data deleted successfully" });
    } else {
      res.status(400).json({ error: "No data found for this user" });
    }
  } catch (error) {
    console.error("Error deleting period data:", error);
    res.status(500).json({ error: "Error deleting period data" });
  }
});

export default router;
