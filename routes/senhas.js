const express = require('express');
const router = express.Router();
const { gerarSenhas, validarSenha } = require('../controllers/senhasController');

router.post('/gerar', gerarSenhas);       // POST /api/senhas/gerar
router.post('/validar', validarSenha);    // POST /api/senhas/validar

module.exports = router;
