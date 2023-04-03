module.exports = (sequelize, Sequelize) => {
  class Note extends Sequelize.Model {
    static createTable() {
      return this.init(
        {
          noteContent: {
            type: Sequelize.TEXT(),
            allowNull: false,
          },
          music: {
            type: Sequelize.TEXT(),
            allowNull: false,
          },
          referenceNumber: {
            type: Sequelize.STRING(),
            allowNull: false,
          },
          title: {
            type: Sequelize.STRING(),
            allowNull: false,
          },
          timeSignature: {
            type: Sequelize.STRING(),
            allowNull: false,
          },
          noteLength: {
            type: Sequelize.STRING(),
            allowNull: false,
          },
          key: {
            type: Sequelize.STRING(),
            allowNull: false,
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
    }
  }
  Note.createTable();
};
