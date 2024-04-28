import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: "string", required: true },

    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },

    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },
    age: { type: Number },
    periodCycle: { type: String },
    lastPeriod: { type: Date },
    weight: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model.User || mongoose.model("User", userSchema);
