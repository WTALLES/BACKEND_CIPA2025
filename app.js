const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API da CIPA rodando 🎉');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const eleicaoRoutes = require('./routes/eleicoes');
app.use('/api/eleicoes', eleicaoRoutes);



const candidatoRoutes = require('./routes/candidatos');
app.use('/api/candidatos', candidatoRoutes);


const senhaRoutes = require('./routes/senhas');
app.use('/api/senhas', senhaRoutes);


const votacaoRoutes = require('./routes/votacao');
app.use('/api/votacao', votacaoRoutes);


const apuracaoRoutes = require('./routes/apuracao');
app.use('/api/apuracao', apuracaoRoutes);
