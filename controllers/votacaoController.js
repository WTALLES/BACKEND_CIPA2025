const { Voto, Senha, Candidato } = require('../models');

exports.registrarVoto = async (req, res) => {
  const { candidato_id, senha_codigo } = req.body;

  try {
    const senha = await Senha.findOne({ where: { codigo: senha_codigo } });

    if (!senha) {
      return res.status(400).json({ error: 'Senha não encontrada.' });
    }

    if (senha.usada) {
      return res.status(403).json({ error: 'Esta senha já foi usada.' });
    }

    const candidato = await Candidato.findByPk(candidato_id);

    if (!candidato) {
      return res.status(400).json({ error: 'Candidato inválido.' });
    }

    if (candidato.eleicao_id !== senha.eleicao_id) {
      return res.status(400).json({ error: 'Candidato não pertence à mesma eleição da senha.' });
    }

    // Registra o voto
    await Voto.create({
      candidato_id: candidato_id,
      senha_id: senha.id
    });

    // Atualiza a senha como usada
    await senha.update({ usada: true });

    res.status(201).json({ ok: true, message: 'Voto registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar voto:', error);
    res.status(500).json({ error: 'Erro ao registrar voto.' });
  }
};
