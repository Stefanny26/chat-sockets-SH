# 💬 Chat en Tiempo Real con Socket.IO – Lista de Usuarios Conectados

## Nombre del estudiante
Stefanny Hernandez

## Fecha de entrega
1 de junio de 2025

---

## 🧠 Introducción

Este proyecto es una mejora del chat en tiempo real desarrollado en la Tarea 2. El objetivo principal fue **agregar una sección que muestre la lista de usuarios conectados**, similar a las interfaces utilizadas en aplicaciones populares como **WhatsApp** o **Telegram**. 

La implementación utiliza **Socket.IO** para gestionar y sincronizar en tiempo real tanto los mensajes como la presencia de usuarios conectados, mejorando la experiencia colaborativa del sistema.

---

## 🚀 Características Principales

- Comunicación en tiempo real entre múltiples usuarios (mensajes instantáneos).
- Interfaz moderna y responsiva, inspirada en WhatsApp Web.
- Avatares y diseño de burbujas estilo chat.
- Sección lateral con **lista de usuarios conectados en tiempo real**.
- Indicador visual de mensajes propios y de otros usuarios.
- Sincronización entre múltiples pestañas y dispositivos.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **WebSockets**: Socket.IO
- **Estilo**: CSS personalizado estilo WhatsApp

---

## 📂 Estructura del Repositorio

📁 public/
  ├─ index.html          # Página principal del chat
  ├─ style.css           # Estilos generales
  ├─ chat.css            # Estilos del componente de mensajes y lista de usuarios
📁 src/
  ├─ server.js           # Servidor con Socket.IO
📁 assets/
  ├─ screenshots/        # Capturas de pantalla del chat funcionando
.gitignore
README.md
package.json

---

## 🌐 Cómo Ejecutar el Proyecto
1. Clona el repositorio:
- git clone https://github.com/tuusuario/tu-repo-chat.git
- cd tu-repo-chat

2. Instala las dependencias:
- npm install

3. Ejecuta el servidor:
- node src/server.js

4. Abre tu navegador y accede a:

- http://localhost:3000

5. Abre en varias pestañas o dispositivos para probar la lista de usuarios conectados en tiempo real.

## 🔀 Rama de Desarrollo
Este proyecto utiliza una rama de desarrollo específica para esta funcionalidad:

- **Rama:** feature-usuarios-conectados

Puedes ver los commits, avances y pruebas en esta rama específica.

## 📸 Capturas de Pantalla
### Vista general del chat con lista de usuarios conectados

### Mensajes diferenciados por usuario

Asegúrate de agregar estas imágenes en tu carpeta /assets/screenshots/.

## Pruebas Recomendadas
Abrir múltiples pestañas y comprobar sincronización de mensajes.

Verificar que la lista de usuarios se actualiza correctamente al conectarse o desconectarse.

Probar en distintos dispositivos o navegadores.


## 🎯 Conclusión
Este proyecto demuestra la capacidad de implementar funcionalidades en tiempo real utilizando WebSockets y personalizar una interfaz de usuario moderna. La lista de usuarios conectados añade valor y refleja la comprensión del flujo de datos en aplicaciones colaborativas.

## 👨‍💻 Autor
**Nombre:** Stefanny Hernandez
**GitHub:** @Stefanny26
