const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/user");
//const Op = Sequelize.Op;

router.get("/", (req, res) => {
  User.findAll()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:id", (req, res) => {
  //const currentUser = await User.findById(id).select("-password");
  //return res.send(currentUser);
  User.findOne({
    where: { id: req.params.id },
  })
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
//return res.send(req.context.models.users[req.params.userId]);

router.post("/register", async (req, res) => {
  const add = await new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  add
    .save()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  const salt = await bcrypt.genSalt(14);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();
});

router.delete("/deleteuser/:id", (req, res) => {
  const _id = req.params.id;
  User.destroy({
    where: { id: _id },
  })
    .then((result) => {
      res.join({ status: "deleted Successfully", result: result });
      console.log("deleted successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
