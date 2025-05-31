const socket = io();
const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const messageInput = document.querySelector("#message");

// Leer cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const username = getCookie("username") || "Anónimo";
document.querySelector("#nombre-usuario").textContent = username;
socket.emit("setUsername", username);

// Cerrar sesión
document.querySelector("#logout").addEventListener("click", () => {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location.reload();
});

// Enviar mensaje
send.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) return;
  socket.emit("message", { message: text });
  messageInput.value = "";
});

// Recibir mensajes
socket.on("message", ({ user, message, senderId }) => {
  const isMe = socket.id === senderId;
  const msgClass = isMe ? "my-message" : "other-message";

  const msg = document.createRange().createContextualFragment(`
    <div class="message ${msgClass}">
      <div class="image-container">
        <img src="/img/perfil.jpeg" alt="Foto de perfil">
      </div>
      <div class="message-body">
        <div class="user-info">
          <span class="username">${user}</span>
          <span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p>${message}</p>
      </div>
    </div>
  `);

  allMessages.append(msg);
  allMessages.scrollTop = allMessages.scrollHeight;
});
