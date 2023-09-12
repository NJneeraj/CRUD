const createItemSchema = require("../helper/itemSchema");

module.exports.validateItem = (req, res, next) => {
  const { error } = createItemSchema.validate(req.body);
  if (error) {
    const msg = error.details[0].message;
    throw new Error(msg);
  } else {
    next();
  }
};
