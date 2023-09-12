const CustomError = require("../helper/customError");
const wrapAsync = require("../helper/wrapAsync");
const db = require("../models");
const Item = db.Item;

const getAllItems = wrapAsync(async (req, res) => {
  const items = await Item.findAll();
  res.status(200).json({ message: "Fetched successfully", data: items });
});

const addItem = wrapAsync(async (req, res) => {
  const { name, price, available = true } = req.body;
  const item = await Item.create({ name, price, available });
  res.status(200).json({ message: "Added successfully", data: item });
});

const getItemById = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Item.findByPk(id);
  if (!item) throw new CustomError("Item not found", 404);
  res.status(200).json({ message: "Fetched successfully", data: item });
});

const deleteById = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const item = await Item.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json({ message: "Successfully deleted", data: item });
});
const updateItemById = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const { name, price, available } = req.body;
  const item = await Item.findByPk(id);
  if (!item) throw new CustomError("Item not found", 404);
  item.set({ name, price, available });
  await item.save();
  res.status(200).json({ message: "Successfullt Updated", data: item });
});

module.exports = {
  getAllItems,
  addItem,
  getItemById,
  deleteById,
  updateItemById,
};
