const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Importar las rutas
const contadoresRoutes = require('./routes/contadores');
const usuariosRoutes = require('./routes/usuarios');
const productosRoutes = require('./routes/productos');
const operacionesRoutes = require('./routes/operaciones');

// Cargar variables de entorno
dotenv.config();

// Inicializar la aplicación Express
const app = express();

// Middleware para procesar los datos JSON
app.use(express.json());
app.use(cors());  // Agregar CORS para permitir solicitudes desde otros dominios

// Usar las rutas
app.use('/contadores', contadoresRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
app.use('/operaciones', operacionesRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

module.exports = app;
