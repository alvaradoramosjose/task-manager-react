import { describe, it, expect } from 'vitest';
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde Express para React!' });
});

module.exports = app;