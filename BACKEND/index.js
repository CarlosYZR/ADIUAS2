require('dotenv').config();

const express = require('express');
const { verificarConexion } = require('./src/config/database');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.get('/health', async (_req, res) => {
  try {
    await verificarConexion();
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

app.listen(port, () => {
  console.log(`Backend disponible en http://localhost:${port}`);
});
