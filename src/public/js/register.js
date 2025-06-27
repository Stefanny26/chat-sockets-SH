const login = document.querySelector("#login");

login.addEventListener("click", () => {
  try {
    const user = document.querySelector("#username").value.trim();
    // Validar que no esté vacío y solo contenga letras, números o guión bajo
    if (user && /^[a-zA-Z0-9_]+$/.test(user)) {
      document.cookie = `username=${user}; path=/`;
      document.location.href = "/";
    } else {
      alert("Por favor ingresa un nombre de usuario válido (solo letras, números y guiones bajos)");
    }
  } catch (err) {
    alert("Ocurrió un error inesperado al registrar el usuario.");
    console.error("Error en registro:", err);
  }
});
