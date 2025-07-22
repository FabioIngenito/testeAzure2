// Importando o módulo Express
const express = require("express");

// Criando uma instância da aplicação Express
const app = express();

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON (opcional para esta aplicação simples)
app.use(express.json());

// Rota principal - GET /
app.get("/", (req, res) => {
  res.send(
    "<h1>Olá Mundo!</h1><p>Esta é uma aplicação básica em Node.js com Express</p>"
  );
});

// Rota adicional - GET /api/hello
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Olá Mundo!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// Rota para página sobre - GET /sobre
app.get("/sobre", (req, res) => {
  res.send(`npm install
        <h1>Sobre esta aplicação</h1>
        <p>Esta é uma aplicação de demonstração criada com:</p>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
        </ul>
        <a href="/">Voltar ao início</a>
    `);
});

// Middleware para rotas não encontradas (404)
app.use("*", (req, res) => {
  res
    .status(404)
    .send(
      '<h1>Página não encontrada</h1><p>A rota solicitada não existe.</p><a href="/">Voltar ao início</a>'
    );
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api/hello`);
  console.log(`ℹ️  Sobre: http://localhost:${PORT}/sobre`);
});
