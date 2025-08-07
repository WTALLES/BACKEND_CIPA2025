const { Candidato } = require('../models');

exports.cadastrarCandidato = async (req, res) => {
  const { nome, setor, turno, numero_votacao, re, foto, eleicao_id } = req.body;

  try {
    const candidato = await Candidato.create({
      nome,
      setor,
      turno,
      numero_votacao,
      re,
      foto,
      eleicao_id
    });

    res.status(201).json(candidato);
  } catch (error) {
    console.error('Erro ao cadastrar candidato:', error);
    res.status(500).json({ error: 'Erro ao cadastrar candidato.' });
  }
};

exports.listarPorEleicao = async (req, res) => {
  const { eleicao_id } = req.params;

  try {
    const candidatos = await Candidato.findAll({ where: { eleicao_id } });
    res.json(candidatos);
  } catch (error) {
    console.error('Erro ao listar candidatos:', error);
    res.status(500).json({ error: 'Erro ao listar candidatos.' });
  }
};
