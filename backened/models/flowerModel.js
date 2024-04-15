const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  color: String,
  price_per_kg: Number,
  price_per_unit: Number,
  image: String,
  addedBy: { type: mongoose.Types.ObjectId, ref: "florist" },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("flowers", schema);

module.exports = model;
