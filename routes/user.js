const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const userExists = require("../middlewares/userMiddleware");
const userRouter = express.Router();

userRouter.post("/register", userExists, registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
