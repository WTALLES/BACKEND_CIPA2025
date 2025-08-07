const express = require('express');
const router = express.Router();
const { registrarVoto } = require('../controllers/votacaoController');

router.post('/', registrarVoto); // POST /api/votacao

module.exports = router;
