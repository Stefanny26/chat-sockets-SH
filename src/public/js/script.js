const socket = io();

// Elementos del DOM
const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const messageInput = document.querySelector("#message");
const usersList = document.querySelector("#users");
const logoutBtn = document.querySelector("#logout");
const nombreUsuarioSpan = document.querySelector("#nombre-usuario");

// Utilidad: obtener cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop().split(";").shift());
  return null;
}

// Obtener nombre del usuario
const username = getCookie("username") || "Anónimo";
socket.emit("setUsername", username);

// Mostrar nombre en el encabezado
if (nombreUsuarioSpan) {
  nombreUsuarioSpan.textContent = username;
}

// Cerrar sesión
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.reload();
  });
}

// Enviar mensaje
send.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) return;

  socket.emit("message", { message: text });
  messageInput.value = "";
});

// Recibir mensaje desde el servidor
socket.on("message", ({ user, message, senderId, time }) => {
  const isMe = socket.id === senderId;
  const msgClass = isMe ? "my-message" : "other-message";

  const msg = document.createRange().createContextualFragment(`
    <div class="message ${msgClass}">
      <div class="image-container">
        <img src="/img/perfil.jpeg" alt="Foto de perfil de ${user}">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">${time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p>${message}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
  allMessages.scrollTop = allMessages.scrollHeight;
});

// Actualizar lista de usuarios conectados
socket.on("users", (users) => {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = user;
    usersList.appendChild(li);
  });
});
