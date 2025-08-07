'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voto = sequelize.define('Voto', {
    candidato_id: DataTypes.INTEGER,
    senha_id: DataTypes.INTEGER
  }, {});
  
  Voto.associate = function(models) {
    Voto.belongsTo(models.Candidato, { foreignKey: 'candidato_id' });
    Voto.belongsTo(models.Senha, { foreignKey: 'senha_id' });
  };
  
  return Voto;
};
