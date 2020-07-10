const Sequelize = require("sequelize");
const db = require("../config/database");

const Movies = db.define("movie", {
    id: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING

    },
    rated: {
        type: Sequelize.STRING

    },
    IMDB rating:{
        type: Sequelize.STRING

    },
    director: {
        type: Sequelize.NUMBER

    },
    writer: {
        type: Sequelize.STRING

    },
    actor: {
        type: Sequelize.STRING

    }
})

module.exports = Movies;