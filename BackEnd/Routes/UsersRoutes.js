const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/usersController");
const cors = require("cors");


router.get("/users", usersController.getAllUsers);
router.post("/create", usersController.addNewUser);
module.exports = router;
