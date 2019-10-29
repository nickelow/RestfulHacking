module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define("report", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    user: DataTypes.STRING
  });
  return Report;
};
