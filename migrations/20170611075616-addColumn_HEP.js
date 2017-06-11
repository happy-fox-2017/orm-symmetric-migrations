'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Students','height',Sequelize.INTEGER)
    .then(function () {
      return queryInterface.addColumn('Students', 'gender', Sequelize.STRING)
      .then(function () {
        return queryInterface.addColumn('Students', 'phone', Sequelize.STRING)
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students','height',Sequelize.INTEGER)
    .then(function () {
      return queryInterface.removeColumn('Students', 'gender', Sequelize.STRING)
      .then(function () {
        return queryInterface.removeColumn('Students', 'phone', Sequelize.STRING)
      })
    })
  }
};
