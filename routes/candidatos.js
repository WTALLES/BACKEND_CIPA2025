const express = require('express');
const router = express.Router();
const { cadastrarCandidato, listarPorEleicao } = require('../controllers/candidatosController');

router.post('/', cadastrarCandidato);                  // POST /api/candidatos
router.get('/:eleicao_id', listarPorEleicao);          // GET /api/candidatos/1

module.exports = router;
