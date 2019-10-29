"use strict";

const Sequelize = require("sequelize");
const env = "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const report = require("./report");
const user = require("./user");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.report = report(sequelize, Sequelize.DataTypes);
db.user = user(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
