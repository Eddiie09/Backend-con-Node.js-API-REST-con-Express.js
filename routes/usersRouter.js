const express = require("express");
const UsersService = require("./services/users.Service");

const router = express.Router();
const userService = new UsersService();

router.get("/", (req, res) => {
  const users = userService.find();
  res.json(users);
});

module.exports = router;
