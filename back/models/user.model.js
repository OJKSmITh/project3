
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(30),
      // validate: {
      //   isEmail: true,
      // },
    },
    nickname: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        is: /^[A-Za-z가-힣0-9]{2,16}$/,
      },
      primaryKey:true,

    },
    userpw: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(11),
      validate: {
        is: /^010[0-9]{8}$/,
      },
    },
    userImg: {
      type: DataTypes.TEXT(),
      allowNull: false,
      defaultValue: `http://127.0.0.1:3001/default-image.png`,
    },
    provider: {
      type: DataTypes.ENUM("local", "kakao"),
      allowNull: false,
      defaultValue: "local",
    },
    snsId: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    introduce: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
    level: {
      type: DataTypes.ENUM("user", "admin"),
      allowNull: false,
      defaultValue: "user",
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Board, {
      foreignKey: "nickname",
    });
    User.hasMany(models.Comment, {
      foreignKey: "nickname",
    });
    User.belongsToMany(models.Board, {
      through: "Liked",
      foreignKey: "nickname",
    });
  };
  
  return User;
};

