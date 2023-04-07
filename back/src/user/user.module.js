const {
  sequelize: {
    models: { User },
  },
} = require("../../models");

const config = require('../../config')
const DateFormat = require("../../lib/dateformat");
const UserRepository = require("./user.repository");
const UserService = require("./user.service");
const UserController = require("./user.controller");
const JWT = require("../../lib/jwt");
const crypto = require("crypto");
const qs = require("qs")
const jwt = new JWT({ crypto });
const axios = require("axios")

const userRepository = new UserRepository({ User });
const userService = new UserService({ userRepository, jwt, DateFormat });
const userController = new UserController({ userService, qs, axios, config });

module.exports = {
  userController,
};
