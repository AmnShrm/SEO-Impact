const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully Connnected");
    })
    .catch((err) => {
      console.log("Issue in DB connection");
      console.error(err);
      process.exit(1);
    });
};

module.exports = dbConnect;
