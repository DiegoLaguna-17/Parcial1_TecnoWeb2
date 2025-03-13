const mongoose = require('mongoose'); // Importamos Mongoose

// Definimos la estructura del usuario
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },  // Nombre es obligatorio
    edad: { type: Number, required: true },    // Edad es obligatoria
    ocupacion: { type: String, required: true } // Ocupación es obligatoria
});

// Exportamos el modelo
module.exports = mongoose.model('Usuario', usuarioSchema);
