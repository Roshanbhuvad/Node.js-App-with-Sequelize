const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Database
const db = require("./config/database");
//Test the DB connection
db.authenticate()
  .then(() => console.log("Database Connected.."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.get("/", (req, res) => res.send("INDEX"));
app.use(bodyParser.json());
app.use("/user", require("./routes/user"));
app.use("/movies", require("./routes/movies"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
