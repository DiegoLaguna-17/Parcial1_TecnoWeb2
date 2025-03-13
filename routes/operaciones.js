const express = require('express');
const router = express.Router();

// Variable global para contar operaciones
let operacionesTotales = 0;

// Middleware para contar operaciones CRUD
router.use((req, res, next) => {
    operacionesTotales++;  // Incrementamos el contador de operaciones
    next();  // Continuar con la siguiente función o ruta
});

// Endpoint para obtener el número total de operaciones realizadas
router.get('/', (req, res) => {
    try {
        res.status(200).json({ operacionesTotales });
    } catch (error) {
        res.status(400).json({ error: 'Error al obtener el contador de operaciones' });
    }
});

module.exports = router;
