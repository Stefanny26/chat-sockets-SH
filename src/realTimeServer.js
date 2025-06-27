module.exports = function (server) {
  const { Server } = require("socket.io");
  const io = new Server(server);

  const users = {};

  io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);

    // Validar y guardar el nombre de usuario
    socket.on("setUsername", (username) => {
      if (!username || typeof username !== "string" || !/^[a-zA-Z0-9_]+$/.test(username)) {
        socket.emit("error", "Nombre de usuario inválido");
        return;
      }
      users[socket.id] = username;
    });

    // Validar y reenviar mensajes
    socket.on("message", ({ message }) => {
      try {
        if (!message || typeof message !== "string" || message.trim() === "") {
          socket.emit("error", "Mensaje inválido");
          return;
        }
        const user = users[socket.id] || "Anónimo";
        io.emit("message", { user, message, senderId: socket.id });
      } catch (err) {
        console.error("Error al procesar mensaje:", err.message);
        socket.emit("error", "Error interno al enviar mensaje");
      }
    });

    // Manejar desconexión
    socket.on("disconnect", () => {
      delete users[socket.id];
    });
  });
};
