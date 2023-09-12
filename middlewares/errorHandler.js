const CustomError = require("../helper/customError");
const logger = require("../utils/logger");

function handleError(err, req, res, next) {
  if (err instanceof CustomError) {
    logger.error(`Error Occured : ${err.message}`, { error: err });
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = handleError;
