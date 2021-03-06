'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    cardId: DataTypes.STRING,
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Card;
};