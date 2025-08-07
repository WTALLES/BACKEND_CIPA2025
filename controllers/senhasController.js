const { Senha } = require('../models');

exports.gerarSenhas = async (req, res) => {
  const { quantidade, eleicao_id } = req.body;

  if (!quantidade || quantidade < 1 || quantidade > 800) {
    return res.status(400).json({ error: 'A quantidade deve estar entre 1 e 800.' });
  }

  try {
    const senhasGeradas = new Set();

    while (senhasGeradas.size < quantidade) {
      const codigo = Math.floor(1000 + Math.random() * 9000).toString(); // Gera número de 4 dígitos
      senhasGeradas.add(codigo);
    }

    const senhas = Array.from(senhasGeradas).map(codigo => ({
      codigo,
      usada: false,
      eleicao_id
    }));

    await Senha.bulkCreate(senhas);
    res.status(201).json(senhas);
  } catch (error) {
    console.error('Erro ao gerar senhas:', error);
    res.status(500).json({ error: 'Erro ao gerar senhas.' });
  }
};

exports.validarSenha = async (req, res) => {
  const { codigo } = req.body;

  try {
    const senha = await Senha.findOne({ where: { codigo, usada: false } });

    if (!senha) {
      return res.status(400).json({ error: 'Senha inválida ou já usada.' });
    }

    res.json({
      ok: true,
      eleicao_id: senha.eleicao_id,
      senha_id: senha.id
    });
  } catch (error) {
    console.error('Erro ao validar senha:', error);
    res.status(500).json({ error: 'Erro ao validar senha.' });
  }
};
