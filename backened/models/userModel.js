const mongoose = require("../connection");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: String,
  email: String,
  password: String,
  avatar: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
