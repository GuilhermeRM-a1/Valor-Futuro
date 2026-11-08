const express = require('express');
const app = express();
// Middleware que permite o servidor entender dados em formato JSON.
// Exemplo: quando o frontend envia um fetch com body em JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cria uma rota do tipo GET no caminho "/" (raiz do servidor)
// Essa rota serve apenas para testar se o servidor está rodando
app.get("/", (req, res) => {
  // Envia uma resposta simples em texto para o navegador
  res.send("Servidor rodando 🚀");
});

