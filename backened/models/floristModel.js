const mongoose = require("../connection");

const schema = new mongoose.Schema({
  shopName: String,
  timings: String,
  mobile: String,
  email: String,
  address: String,
  image: String,
  flowers: [{ type: mongoose.Types.ObjectId, ref: "flowers" }],
});

const model = mongoose.model("florist", schema);

module.exports = model;
