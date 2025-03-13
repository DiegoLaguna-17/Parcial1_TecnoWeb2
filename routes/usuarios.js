const express = require('express');
const Usuario = require('../models/Usuario'); // Importamos el modelo de Usuario
const router = express.Router();

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const { nombre, edad, ocupacion } = req.body;
        const nuevoUsuario = new Usuario({ nombre, edad, ocupacion });
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el usuario' });
    }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener los usuarios' });
    }
});

// Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
    try {
        const { nombre, edad, ocupacion } = req.body;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nombre, edad, ocupacion },
            { new: true }
        );
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
});

// Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar el usuario' });
    }
});

module.exports = router;
