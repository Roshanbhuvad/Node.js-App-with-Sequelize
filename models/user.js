const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true,
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
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

User.sync().then(() => {
  console.log("table created");
});
/*
User.associate = (models) => {
  User.hasMany(models.Movies, { onDelete: "CASCADE" });
};

User.findByLogin = async (login) => {
  let user = await User.findOne({
    where: { username: login },
  });

  if (!user) {
    user = await User.findOne({
      where: { email: login },
    });
  }
  return user;
};
return User;
*/
module.exports = User;
