const express = require('express');
const router = express.Router();
const { criarEleicao, listarEleicoes } = require('../controllers/eleicoesController');

router.post('/', criarEleicao);        // POST /api/eleicoes
router.get('/', listarEleicoes);       // GET /api/eleicoes

module.exports = router;
