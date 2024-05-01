import mongoose from "mongoose";

const periodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  lastPeriodDate: Date,
  periodCycle: Number,
  nextPeriodDate: Date,
  ovulationDate: Date,
});

export default mongoose.model.Period || mongoose.model("Period", periodSchema);
