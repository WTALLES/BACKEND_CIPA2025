'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidatos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      setor: {
        type: Sequelize.STRING
      },
      turno: {
        type: Sequelize.STRING
      },
      numero_votacao: {
        type: Sequelize.INTEGER
      },
      re: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      eleicao_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidatos');
  }
};