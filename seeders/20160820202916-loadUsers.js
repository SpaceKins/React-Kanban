'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        first_name: 'John',
        last_name: 'Up',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Sebastian',
        last_name: 'Bach',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users',null,{});    
  }
};
