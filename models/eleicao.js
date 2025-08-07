'use strict';
module.exports = (sequelize, DataTypes) => {
  const Eleicao = sequelize.define('Eleicao', {
    ano: DataTypes.INTEGER
  }, {});
  
  Eleicao.associate = function(models) {
    Eleicao.hasMany(models.Candidato, { foreignKey: 'eleicao_id' });
    Eleicao.hasMany(models.Senha, { foreignKey: 'eleicao_id' });
  };
  
  return Eleicao;
};
