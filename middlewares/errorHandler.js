const CustomError = require("../helper/customError");

function handleError(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
}
module.exports = handleError;
