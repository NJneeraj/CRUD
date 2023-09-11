require("dotenv").config();
const express = require("express");
const itemsRouter = require("./routes/items");
const app = express();
const port = process.env.PORT || 3000;

app.use("/items", itemsRouter);
app.listen(port, () => console.log("Connected to server on port ", port));
