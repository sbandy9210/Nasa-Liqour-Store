'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'products',
      [
        {
          productID: 1,
          brand: 'Buffalo Trace',
          image: 'https://i.imgur.com/fj4emtY.jpg',
          stock: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
         productID: 2,
         brand: 'Jameson',
         image: 'https://media-verticommnetwork1.netdna-ssl.com/wines/jameson-45l-879491-s493.jpg',
         stock: true,
         createdAt: new Date(),
         updatedAt: new Date()

        },
        {
         productID: 3,
         brand: 'Jim Beam',
         image: 'https://addtocartaustralia.com.au/wp-content/uploads/2020/10/90248-1-2.png',
         stock: false,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         productID: 4,
         brand: "Maker's Mark",
         image: 'https://vignette.wikia.nocookie.net/whiskey/images/a/a1/Makersmark.jpg/revision/latest?cb=20111216193258',
         stock: false,
         createdAt: new Date(),
         updatedAt: new Date()

       },
       {
         productID: 5,
         brand: "Tito's Handmade Vodka",
         image: 'https://www.stevesliquor.com.au/assets/img/products/Steves-1096108.png',
         stock: true,
         createdAt: new Date(),
         updatedAt: new Date()

       }
      ]
    )
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
    
  }
};
