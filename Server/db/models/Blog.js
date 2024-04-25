import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    poster: {
      type: String,
    },
    author: {
      type: String,
    },
    datePublished: {
      type: String,
    },
    topic: {
      type: String,
    },
    introduction: {
      type: String,
    },
    contentImage: {
      type: String,
    },
    conclusion: {
      type: String,
    },
    content: {
      type: [String],
    },
    subtitle: {
      type: [String],
    },
    categories: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model.Blog || mongoose.model("Blog", blogSchema);
