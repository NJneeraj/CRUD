require("dotenv").config();
const express = require("express");
const itemsRouter = require("./routes/items");
const handleError = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/items", itemsRouter);
app.use(handleError);
app.listen(port, () => console.log("Connected to server on port ", port));
