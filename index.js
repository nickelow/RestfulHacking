const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./models/index");
const reports = require("./routes/report-routes");
const users = require("./routes/user-routes");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

reports(app, db);
users(app, db);
db.sequelize
  .sync()
  .then(() => {
    app.listen(8080, () => console.log("App listening on port 8080!"));
  })
  .catch(err => console.log(err));
