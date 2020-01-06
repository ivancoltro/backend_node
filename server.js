const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require("cors");

//iniciando o APP
const app = express();
app.use(express.json());
app.use(cors()); // serve para deixar esta app publica, possivel de ser acessada de qualquer url

mongoose.connect('mongodb+srv://projeto:123@cluster0-4zafj.mongodb.net/emater?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser:true
});


// chama a classe batida que representa uma tabela do banco
requireDir('./src/models');

// rotas
app.use("/api", require("./src/routes"));

app.listen(3001);