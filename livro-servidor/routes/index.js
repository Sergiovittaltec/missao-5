const express = require('express');
const router = express.Router();

// Rota padrão para "/"
router.get('/', (req, res) => {
    res.send('Bem-vindo à API do servidor de livros!');
});

module.exports = router;
