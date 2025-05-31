module.exports = function (server) {
  const { Server } = require("socket.io");
  const io = new Server(server);

  const users = {};

  io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    socket.on("setUsername", (username) => {
      users[socket.id] = username;
    });

    socket.on("message", ({ message }) => {
      const user = users[socket.id] || "Anónimo";
      io.emit("message", { user, message, senderId: socket.id });
    });

    socket.on("disconnect", () => {
      delete users[socket.id];
    });
  });
};
