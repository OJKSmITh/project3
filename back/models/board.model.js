const {port, host} = require('../config')

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
          state: {
            type: Sequelize.ENUM("blind", "temp", "public"),
            defaultValue: "public",
            allowNull: false,
          }
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
        foreignKey: "boardidx",
      });
      this.belongsToMany(models.User, {
        through: "Liked",
        foreignKey: "boardidx",
      });
    }
  }
  Board.createTable();
};
