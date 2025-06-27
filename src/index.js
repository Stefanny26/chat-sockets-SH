const express = require('express');
const { createServer } = require('http');
const realTimeServer = require('./realTimeServer');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const httpServer = createServer(app);

// Configuraciones
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(require('./routes'));

// Middleware global de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Error interno del servidor');
});

// Iniciar el servidor
httpServer.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
});

// Llamo al servidor en tiempo real
realTimeServer(httpServer);
