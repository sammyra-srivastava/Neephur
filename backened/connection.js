const mongoose = require("mongoose");

const url =
  "mongodb+srv://sammyra_srivastava:kumkum12112000@cluster0.eilsz.mongodb.net/E-Udayaan?retryWrites=true&w=majority";

// asynchronous function
mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = mongoose;