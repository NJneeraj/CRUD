const express = require("express");
const itemsRouter = express.Router();

itemsRouter.get("/", (req, res) => {
  res.send("All items are available");
});
itemsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`${id} item is available`);
});
module.exports = itemsRouter;
