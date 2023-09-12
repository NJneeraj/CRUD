const CustomError = require("../helper/customError");
const db = require("../models");
const User = db.User;

const userExists = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) throw new CustomError("User already exists", 400);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userExists;
