'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Students',
      'Full_Name',
      Sequelize.STRING
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Students',"Full_Name")
  }
};
