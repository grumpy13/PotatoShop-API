const { DataTypes, Model } = require("sequelize");
const db = require("../_db");

class Potato extends Model {}

Potato.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 1,
      },
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Potato;
