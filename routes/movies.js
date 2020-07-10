const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Movies = require("../models/movies");

router.post("/addmovie", async (req, res) => {
  const add = await new Movies({
    MovieId: req.body.MovieId,
    genre: req.body.genre,
    rated: req.body.rated,
    IMDB: req.body.IMDB,
    director: req.body.director,
    writer: req.body.writer,
    actor: req.body.actor,
  });
  add
    .save()
    .then((result) => {
      res.json(result);
      console.log(result);
    })
    .catch((err) => {
      console.lo9(err);
    });
});

router.delete("deletemovie/:id", (req, res) => {
  const _id = req.params.MovieId;
  Movies.destroy({
    where: { MovieId: _id },
  })
    .then((result) => {
      res.join({ status: "Deleted Successfully", result: result });
      console.log("deleted Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
