const express = require('express');
const router = express.Router();
const { apurarVotos } = require('../controllers/apuracaoController');

router.get('/:eleicao_id', apurarVotos); // GET /api/apuracao/1

module.exports = router;
