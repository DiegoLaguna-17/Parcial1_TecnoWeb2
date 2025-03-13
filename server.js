const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Importar las rutas
const usuarioRoutes = require('./routes/usuarios');
const productoRoutes = require('./routes/productos');
const contadorRoutes = require('./routes/contadores');
const operacionesRoutes = require('./routes/operaciones');

// Usar las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/contadores', contadorRoutes);
app.use('/operaciones', operacionesRoutes);

// Conectar a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos', err);
  });

// Definir el puerto desde las variables de entorno o usar el 5000 por defecto
const PORT = process.env.PORT || 5000;

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});







