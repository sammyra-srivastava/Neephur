const mongoose = require("../connection");

const schema = new mongoose.Schema({
  rating: Number,
  text: String,
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  florist: { type: mongoose.Types.ObjectId, ref: "florist" },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("reviews", schema);

module.exports = model;
