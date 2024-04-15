const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: String,
  subject: String,
  message: String,
   createdAt: { type: Date, default: new Date() },
  
});

const model = mongoose.model("contact", schema);

module.exports = model;
