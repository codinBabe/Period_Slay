import express from "express";

const router = express.Router();
router.post("/calculate", (req, res) => {
  const { firstDayLastPeriod, averageCycleLength, lastPeriodDuration } =
    req.body;
  console.log(req.body);
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

  const fertilePeriodStart = new Date(ovulationDate);
  fertilePeriodStart.setDate(fertilePeriodStart.getDate() - 3);
  const fertilePeriodEnd = new Date(ovulationDate);
  fertilePeriodEnd.setDate(fertilePeriodEnd.getDate() + 3);

  const unfertilePeriodStart = new Date(firstDayLastPeriod);
  const unfertilePeriodEnd = nextPeriodDate;
  console.log(res.json());
  res.json({
    nextPeriodDate,
    ovulationDate,
    fertilePeriodStart,
    fertilePeriodEnd,
    unfertilePeriodStart,
    unfertilePeriodEnd,
  });
});
export default router;
