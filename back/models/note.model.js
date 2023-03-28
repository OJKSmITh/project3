module.exports = (sequelize, Sequelize) => {
  class Note extends Sequelize.Model {
    static createTable() {
      return this.init(
        {
            noteContent:{
                type: Sequelize.STRING(64),
                allowNul: false,
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
