const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://lieonadim:rTHbAMhomV00qZvm@cluster0.ilacjpy.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password,
    });
    res.json(userDoc);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  res.json(userDoc);
});

app.listen(8000, () => {
  console.log("Server Started");
});
