const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Salade tomate oignon");
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
