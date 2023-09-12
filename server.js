require("dotenv").config();
const express = require("express");
const itemsRouter = require("./routes/items");
const handleError = require("./middlewares/errorHandler");
const logger = require("./utils/logger");
const userRouter = require("./routes/user");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  logger.info(`[${req.method}] ${req.url}`);
  next();
});
app.use("/items", itemsRouter);
app.use("/user", userRouter);
app.use(handleError);
app.listen(port, () => logger.info("Connected to server on port ", port));
