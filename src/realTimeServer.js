const { Server } = require("socket.io");

module.exports = (server) => {
  const io = new Server(server);
  const users = new Map(); // socket.id -> username

  io.on("connection", (socket) => {
    socket.on("setUsername", (username) => {
      users.set(socket.id, username);
      io.emit("users", Array.from(users.values())); // Enviar lista actualizada
    });

    socket.on("message", (data) => {
      const username = users.get(socket.id) || "Anónimo";
      io.emit("message", {
        user: username,
        message: data.message,
        senderId: socket.id
      });
    });

    socket.on("disconnect", () => {
      users.delete(socket.id);
      io.emit("users", Array.from(users.values())); // Actualizar lista
    });
  });
};