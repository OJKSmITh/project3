module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {
    static createTable() {
        return this.init(
            {
                email: {
                    type: Sequelize.STRING(30),
                    validate: {
                        isEmail: true,
                    },
                },
                nickname: {
                    type: Sequelize.STRING(16),
                    allowNull: false,
                    validate: {
                        is: /^[A-Za-z가-힣0-9]{2,16}$/,
                    },
                },
                userpw: {
                    type: Sequelize.STRING(64),
                    allowNull: false,
                },
                phoneNumber: {
                    type: Sequelize.STRING(11),
                    validate: {
                        is: /^010[0-9]{8}$/,
                    },
                },
                userImg: {
                    type: Sequelize.TEXT(),
                    allowNull: false,
                    // defaultValue: `http://${host}:${port}/default-image.png`,
                },
                provider: {
                    type: Sequelize.ENUM("local", "kakao"),
                    allowNull: false,
                    defaultValue: "local",
                },
                snsId: {
                    type: Sequelize.STRING(30),
                    allowNull: true,
                },
                introduce: {
                    type: Sequelize.TEXT(),
                    allowNull: true,
                },
                level: {
                  type: Sequelize.ENUM("user", "admin"),
                  allowNull: false,
                  defaultValue: "user",
                }
            },
            {
                sequelize,
                timestamp: true,
            }
        );
    }
    static associate(models) {
        this.hasMany(models.Board, {
            foreignKey: "nickname",
        });
        this.hasMany(models.Comment, {
            foreignKey: "nickname",
        });
        this.belongsToMany(models.Board, {
            through: "Liked",
            foreignKey: "nickname",
        });
    }
  }
  User.createTable();
};

