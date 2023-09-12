const items = require("../items.json");
const axios = require("axios");

async function seed(data) {
  for (let item of data) {
    await axios.post("http://localhost:3000/items/", { ...item });
  }
}
seed(items);
