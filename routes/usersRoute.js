//Imports
const express = require("express");
const router = express.Router();
// Create a user array
const users = [
  {
    id: 1,
    firstName: "User1",
    lastName: "last1",
    age: 21,
  },
  {
    id: 2,
    firstName: "User2",
    lastName: "last2",
    age: 22,
  },
  {
    id: 3,
    firstName: "User3",
    lastName: "last3",
    age: 23,
  },
];

//Get -get request to users home
router.get("/", (req, res) => {
  res.send(users); //get all users
});

//Post - post req
router.post("/", (req, res) => {
  //create a user from req body
  const user = req.body;
  //add user to the USERS array
  users.push(user);
  // console.log(user); //
  res.send("New User Added Successfully"); //get all users
});

//Delete - delete req
router.delete("/:id", (req, res) => {
  //get id from req
  let id = parseInt(req.params.id);
  const data = users.filter((user) => user.id !== id);
  return res.status(200).send({ message: "User deleted", data });
});
//Export
module.exports = router;
