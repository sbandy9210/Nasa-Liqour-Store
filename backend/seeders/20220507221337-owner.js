'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'owners', 
      [
        {
          id: 1,
          username: 'username123',
          password: '123password',
          createdAt: new Date(),
          updatedAt: new Date()
        }

    ])
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('owners', null, {})
  }
};
