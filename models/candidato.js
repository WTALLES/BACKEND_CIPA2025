'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidato = sequelize.define('Candidato', {
    nome: DataTypes.STRING,
    setor: DataTypes.STRING,
    turno: DataTypes.STRING,
    numero_votacao: DataTypes.INTEGER,
    re: DataTypes.STRING,
    foto: DataTypes.STRING,
    eleicao_id: DataTypes.INTEGER
  }, {});
  
  Candidato.associate = function(models) {
    Candidato.belongsTo(models.Eleicao, { foreignKey: 'eleicao_id' });
    Candidato.hasMany(models.Voto, { foreignKey: 'candidato_id' });
  };
  
  return Candidato;
};
