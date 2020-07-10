const Sequelize = require("sequelize");
const db = require("../config/database");

const Movies = db.define("movie", {
  MovieId: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  rated: {
    type: Sequelize.STRING,
  },
  IMDB: {
    type: Sequelize.STRING,
  },
  director: {
    type: Sequelize.NUMBER,
  },
  writer: {
    type: Sequelize.STRING,
  },
  actor: {
    type: Sequelize.STRING,
  },
});

Movies.sync().then(() => {
  console.log("table created");
});
Movies.associate = (models) => {
  Movies.belongsTo(models.User);
};

return Movies;
module.exports = Movies;
