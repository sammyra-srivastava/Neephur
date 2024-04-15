const mongoose = require("../connection");

const schema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  cart: Array,
  address: Object,
  paymentDetails: Object,
  createdAt: Date,
});

const model = mongoose.model("orders", schema);

module.exports = model;
