'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Students', [{
      first_name : 'hilma',
      last_name : 'fauzi',
      gender: 'female',
      height: 160,
      email: 'hilma@outlook.com',
      phone: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'ali',
      last_name : 'fauzi',
      gender: 'male',
      height: 170,
      email: 'ali@outlook.com',
      phone: '22222222222',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'deden',
      last_name : 'marsudi',
      gender: 'female',
      height: 168,
      email: 'deden@outlook.com',
      phone: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      first_name : 'sore',
      last_name : 'fauzi',
      gender: 'female',
      height: 168,
      email: 'sore@outlook.com',
      phone: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
