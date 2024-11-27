const mongoose = require('./conexao');

// Definindo o esquema do Livro
const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    ano: Number
});

// Exportando o modelo Livro para ser usado nas operações de CRUD
module.exports = mongoose.model('Livro', LivroSchema, 'livros');
