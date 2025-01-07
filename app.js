//Imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

//Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

//Use static pages

//Import routes
const userRoutes = require("./routes/usersRoute");
app.use("/users", userRoutes);
//GET - Home route
app.get("/", (req, res) => {
  res.send(`Home Page`);
});
//Start the server
app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
