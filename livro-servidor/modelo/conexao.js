const mongoose = require('mongoose');
const options = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect('mongodb://localhost:27017/livraria', options)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

module.exports = mongoose;
