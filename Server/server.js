import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import signupRouter from "./routes/signup.js";
import loginRouter from "./routes/login.js";
import dbConnect from "./db/connection.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/signup", signupRouter);
app.use("/login", loginRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

dbConnect().then(() => {
  // Start the server after the database connection is established
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
