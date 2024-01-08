const express = require("express");
const {
  createChat,
  findChat,
  findUsersChats,
} = require("../controllers/chatController");
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUsersChats);
router.get("/find/:firstId/:secondId", findChat);

module.exports = router;
