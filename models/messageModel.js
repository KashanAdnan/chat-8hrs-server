const mongoose = require("mongoose");

const messageSchmea = new mongoose.Schema(
  {
    chatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("messages", messageSchmea);

module.exports = messageModel;
