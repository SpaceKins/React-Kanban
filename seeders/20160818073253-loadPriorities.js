'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Priorities', [{
        priority: 'Low'
      },
      {
        priority: 'Medium'
      },
      {
        priority: 'High'
      },
      {
        priority: 'Blocker'
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Priorities', null, {});    
  }
};

