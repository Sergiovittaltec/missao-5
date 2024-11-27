const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => await Livro.find({});

// Função para incluir um novo livro
const incluir = async (livro) => await Livro.create(livro);

// Função para excluir um livro pelo ID
const excluir = async (codigo) => await Livro.deleteOne({ _id: codigo });

// Exportando as funções para serem usadas nas rotas
module.exports = { obterLivros, incluir, excluir };
