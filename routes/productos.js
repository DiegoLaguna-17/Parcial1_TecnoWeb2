const express = require('express');
const Producto = require('../models/Producto'); // Importamos el modelo de Producto
const router = express.Router();

// Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const { nombre, precio, categoria } = req.body;
        const nuevoProducto = new Producto({ nombre, precio, categoria });
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los productos' });
    }
});

// Actualizar un producto por ID
router.put('/:id', async (req, res) => {
    try {
        const { nombre, precio, categoria } = req.body;
        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            { nombre, precio, categoria },
            { new: true }
        );
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el producto' });
    }
});

// Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el producto' });
    }
});

module.exports = router;
