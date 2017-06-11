'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn('Students','height', {type:Sequelize.INTEGER}),
      queryInterface.addColumn('Students','gender', {type:Sequelize.STRING}),
      queryInterface.addColumn('Students','phone', {type:Sequelize.STRING}),
      queryInterface.addColumn('Students','name', {type:Sequelize.STRING})

    ];
  },

  down: function (queryInterface, Sequelize) {
    return [
      queryInterface.removeColumn('Students','height', {type:Sequelize.INTEGER}),
      queryInterface.removeColumn('Students','gender', {type:Sequelize.STRING}),
      queryInterface.removeColumn('Students','phone', {type:Sequelize.STRING}),
      queryInterface.removeColumn('Students','name', {type:Sequelize.STRING})

    ];
  }
};
