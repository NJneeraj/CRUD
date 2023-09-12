const CustomError = require("../helper/customError");
const wrapAsync = require("../helper/wrapAsync");
const db = require("../models");
const logger = require("../utils/logger");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.SECRET_KEY;
const User = db.User;

const registerUser = wrapAsync(async (req, res) => {
  //   logger.log("Yeah");
  const { name, email, password } = req.body;
  const options = {
    name,
    email,
    password: await bcrypt.hash(password, 10),
  };
  const user = await User.create(options);
  const token = jwt.sign({ id: user.id }, jwtSecret);
  res.status(200).json({ token });
});
const loginUser = wrapAsync(async (req, res) => {
  logger.log("login");
});

module.exports = { registerUser, loginUser };
