const express = require('express');
const Producto = require('../models/Producto');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Obtener el número total de documentos en Usuarios y Productos
router.get('/', async (req, res) => {
    try {
        const totalProductos = await Producto.countDocuments();
        const totalUsuarios = await Usuario.countDocuments();
        res.status(200).json({ totalProductos, totalUsuarios });
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los contadores' });
    }
});

module.exports = router;
