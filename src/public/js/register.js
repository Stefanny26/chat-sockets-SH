const login = document.querySelector("#login");

login.addEventListener("click", () => {
  const user = document.querySelector("#username").value.trim();

  if (user) {
    // Guardar cookie por 1 día
    document.cookie = `username=${encodeURIComponent(user)}; path=/; max-age=86400`;
    // Redirigir al chat
    window.location.href = "/";
  } else {
    alert("Por favor, ingresa tu nombre de usuario.");
  }
});