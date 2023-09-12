const express = require("express");
const {
  getAllItems,
  addItem,
  getItemById,
  deleteById,
  updateItemById,
} = require("../controllers/itemController");
const { validateItem } = require("../middlewares/validateItem");
const itemsRouter = express.Router();

itemsRouter.get("/", getAllItems);
itemsRouter.post("/", validateItem, addItem);
itemsRouter.get("/:id", getItemById);
itemsRouter.delete("/:id", deleteById);
itemsRouter.put("/:id", validateItem, updateItemById);
module.exports = itemsRouter;
