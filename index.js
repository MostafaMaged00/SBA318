//Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

//GET - Home route
app.get("/", (req, res) => {
  res.send(`Home Page`);
});
//Start the server
app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
