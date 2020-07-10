const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  id: {
    type: Sequelize.NUMBER,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
});

module.exports = User;
