const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class Board extends Sequelize.Model {
    static createTable() {
      return this.init(
        {
          subject: {
            type: Sequelize.STRING(100),
            allowNull: false,
          },
          content: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          hit: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
          },
          uploadImg: {
            type: Sequelize.TEXT(),
          }
          ,
          note: {
            type: Sequelize.STRING(30),
            defaultValue: "Null"
          },
          state: {
            type: Sequelize.ENUM("blind", "temp", "public"),
            allowNull: false,
            defaultValue: "public",
          },
        },
        {
          sequelize,
          timestamp: true,
        }
      );
    }
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "nickname",
      });
      this.hasMany(models.Comment, {
        foreignKey: "id",
      });
      // this.belongsToMany(models.User, {
      //   through: "Liked",
      //   foreignKey: "boardidx",
      // });
    }
  }
  Board.createTable();
};
