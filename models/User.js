const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true, min: 4 },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
