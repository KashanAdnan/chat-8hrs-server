const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const chatRoute = require("./routes/chatRoute");
const messageRoute = require("./routes/messageRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// CRUD

app.listen(process.env.PORT, () => {
  console.log(`Server running on port : ${process.env.PORT}`);
});

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() => {
    console.log(`MongoDB connection established`);
  })
  .catch((err) => {
    console.log(`Message connection failed : ${err.message}`);
  });
