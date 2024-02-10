const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

// Connect DB
const dbConnect = require("./config/database");
dbConnect();

// Routes
const userRoute = require("./routes/UserRoute");

// Mount routes
app.use("/api/v1", userRoute);

// Live Server
app.listen(PORT, () => {
  console.log(`server started at port no ${PORT}`);
});


// Default Route
app.get("/", (req, res) => {
  res.send("Hello jee, kaise ho saare");
});
