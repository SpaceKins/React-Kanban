'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Cards',
    'assignedTo'
    ,{
      type:Sequelize.INTEGER
      ,allowNull: false
      ,defaultValue: 0 
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.remove('Cards','assignedTo')
  }
};
