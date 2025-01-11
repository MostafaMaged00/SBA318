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
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/css"));

//Set Template Engine

app.set("view engine", "ejs");

//Import routes
const userRoutes = require("./routes/usersRoute");
const postRoutes = require("./routes/postsRoute");
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

//GET - Home route
app.get("/", (req, res) => {
  res.send(`Home Page`);
});
//Static page about

//Start the server
app.listen(PORT, () => {
  console.log(`Server is live on http://localhost:${PORT}`);
});
