const express = require('express');
const cors = require('cors');
const livroRouter = require('./routes/livros'); // Importa as rotas de livros

const app = express();

app.use(cors());              // Habilita CORS
app.use(express.json());       // Habilita o parsing de JSON
app.use('/livros', livroRouter); // Define a rota base para os livros

module.exports = app;
