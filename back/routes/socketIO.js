const SocketIO = require("socket.io");
const axios = require("axios");

module.exports = async (server, app) => {
  const io = SocketIO(server);

  io.on("connection", (socket) => {
    socket.on("data", (data) => {
      // socket.broadcast.emit 대신 io.emit을 사용합니다.
      io.emit("reply", JSON.stringify(data));
    });
  });
};