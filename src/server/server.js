const express = require("express");
const cors = require("cors");
const { readFileSync } = require("fs");
const { config } = require("dotenv");
//use .env file for process level config
config({
  path: "../.env",
});

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.SERVER_PORT || 3001;

app.get("/translations", (req, res) => {
  const controlTranslations = JSON.parse(
    readFileSync("./translations/controls.json")
  );
  const infoTranslations = JSON.parse(readFileSync("./translations/info.json"));

  res
    .status(200)
    .end(JSON.stringify({ ...controlTranslations, ...infoTranslations }));
});
app.listen(PORT, () => {
  console.log(`Started server at http://localhost:${PORT}.`);
});
