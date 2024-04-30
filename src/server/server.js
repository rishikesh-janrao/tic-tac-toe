const express = require("express");
const cors = require("cors");
const { readFileSync } = require("fs");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/translations", (req, res) => {
  const controlTranslations = JSON.parse(
    readFileSync("./translations/controls.json")
  );
  const infoTranslations = JSON.parse(readFileSync("./translations/info.json"));

  res
    .status(200)
    .end(JSON.stringify({ ...controlTranslations, ...infoTranslations }));
});

app.listen(3001);
