//Imports
const express = require("express");
const router = express.Router();

// Create a posts array
const posts = [
  {
    id: 1,
    post: "This is a post text ",
    userid: 1,
  },
  {
    id: 2,
    post: "This is a post text number 2 ",
    userid: 1,
  },
  {
    id: 3,
    post: "This is a post text number 3 ",
    userid: 2,
  },
  {
    id: 4,
    post: "This is a post text number 4 ",
    userid: 2,
  },
];

//Get -get request to users home
router.get("/", (req, res) => {
  res.send(posts); //get all posts
});

//Export
module.exports = router;
