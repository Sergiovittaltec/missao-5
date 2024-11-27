const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao'); // Certifique-se que o caminho está correto

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    const sucesso = await incluir(req.body);
    res.json({ sucesso: !!sucesso });
});

// Rota para excluir um livro pelo ID
router.delete('/:id', async (req, res) => {
    const sucesso = await excluir(req.params.id);
    res.json({ sucesso: !!sucesso });
});

module.exports = router;
