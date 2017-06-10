'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    
    return queryInterface.bulkInsert('Students', [{
      name: 'John Doe',
      gender: 'male',
      birthday: '1982-11-10',
      email: 'john@gmail.com',
      phone: '32432423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'josh Doerer',
      gender: 'female',
      birthday: '1981-10-10',
      email: 'josh@gmail.com',
      phone: '3234242423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'teno sabrina',
      gender: 'female',
      birthday: '1980-09-10',
      email: 'teno@gmail.com',
      phone: '32432423890',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
