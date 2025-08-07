const { Candidato, Voto } = require('../models');

exports.apurarVotos = async (req, res) => {
  const { eleicao_id } = req.params;

  try {
    const candidatos = await Candidato.findAll({
      where: { eleicao_id }
    });

    // Total de votos da eleição
    const totalVotos = await Voto.count({
      include: [{
        model: Candidato,
        where: { eleicao_id }
      }]
    });

    // Votos por candidato
    const resultado = await Promise.all(candidatos.map(async (candidato) => {
      const votos = await Voto.count({ where: { candidato_id: candidato.id } });
      const percentual = totalVotos > 0 ? ((votos / totalVotos) * 100).toFixed(2) : '0.00';

      return {
        id: candidato.id,
        nome: candidato.nome,
        numero_votacao: candidato.numero_votacao,
        re: candidato.re,
        setor: candidato.setor,
        votos,
        percentual
      };
    }));

    res.json({
      total_votos: totalVotos,
      candidatos: resultado
    });

  } catch (error) {
    console.error('Erro na apuração:', error);
    res.status(500).json({ error: 'Erro na apuração de votos.' });
  }
};
