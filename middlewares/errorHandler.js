function handleError(err, req, res, next) {
  console.log(err.stack);
  res.status(500).json({ Error: err.message });
}
module.exports = handleError;
