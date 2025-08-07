'use strict';
module.exports = (sequelize, DataTypes) => {
  const Senha = sequelize.define('Senha', {
    codigo: DataTypes.STRING,
    usada: DataTypes.BOOLEAN,
    eleicao_id: DataTypes.INTEGER
  }, {});
  
  Senha.associate = function(models) {
    Senha.belongsTo(models.Eleicao, { foreignKey: 'eleicao_id' });
    Senha.hasOne(models.Voto, { foreignKey: 'senha_id' });
  };
  
  return Senha;
};
