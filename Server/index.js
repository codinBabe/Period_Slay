import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import signupRouter from "./routes/signup.js";
import loginRouter from "./routes/login.js";
import dbConnect from "./db/connection.js";
import userRouter from "./routes/user.js";
import uploadRouter from "./routes/upload.js";
import blogRouter from "./routes/blog.js";
import calculateRouter from "./routes/calculate.js";
import forgetRouter from "./routes/forget.js";
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: "https://period-slay.vercel.app" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/user", userRouter);
app.use("/upload", uploadRouter);
app.use("/blog", blogRouter);
app.use("/calculate", calculateRouter);
app.use("/forget", forgetRouter);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

dbConnect().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
