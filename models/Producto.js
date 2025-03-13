const mongoose = require('mongoose'); // Importamos Mongoose

// Definimos la estructura del producto
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },  // Nombre es obligatorio
    precio: { type: Number, required: true },  // Precio es obligatorio
    categoria: { type: String, required: true } // Categoría es obligatoria
});

// Exportamos el modelo
module.exports = mongoose.model('Producto', productoSchema);
