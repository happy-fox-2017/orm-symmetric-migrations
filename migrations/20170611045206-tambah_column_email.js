'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Students',
      'email',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Students',"email")
  }
};
