const { Eleicao } = require('../models');

exports.criarEleicao = async (req, res) => {
  const { ano } = req.body;

  try {
    const existente = await Eleicao.findOne({ where: { ano } });

    if (existente) {
      return res.status(400).json({ error: 'Eleição já cadastrada para este ano.' });
    }

    const novaEleicao = await Eleicao.create({ ano });
    res.status(201).json(novaEleicao);
  } catch (error) {
    console.error('Erro ao criar eleição:', error);
    res.status(500).json({ error: 'Erro ao criar eleição.' });
  }
};

exports.listarEleicoes = async (req, res) => {
  try {
    const eleicoes = await Eleicao.findAll({ order: [['ano', 'DESC']] });
    res.json(eleicoes);
  } catch (error) {
    console.error('Erro ao listar eleições:', error);
    res.status(500).json({ error: 'Erro ao listar eleições.' });
  }
};
