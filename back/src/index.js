const user = require("./user/user.route");
const auth = require("./auth/auth.route");
const board = require("./board/board.route");
const gpt = require("./gpt/gpt.route");

module.exports = {
  user,
  auth,
  board,
  gpt,
};
