'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'vendors',
      [
        {
          id: 1,
          username: '123username',
          password: 'password123',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vendors', null, {})
   
  }
};
