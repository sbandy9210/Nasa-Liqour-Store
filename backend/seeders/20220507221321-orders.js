'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'orders',
       [
         {
           id: 1,
           brand: 'Buffalo Trace',
           image: 'https://i1.wp.com/drinkhacker.com/wp-content/uploads/2019/07/buffalo-trace-caskers.jpg',
           quantity: 10,
           stock: true,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          id: 2,
          brand: 'Jameson',
          image: 'https://media-verticommnetwork1.netdna-ssl.com/wines/jameson-45l-879491-s493.jpg',
          quantity: 10,
          stock: true,
          createdAt: new Date(),
           updatedAt: new Date()

         },
         {
          id: 3,
          brand: 'Jim Beam',
          image: 'https://addtocartaustralia.com.au/wp-content/uploads/2020/10/90248-1-2.png',
          quantity: 10,
          stock: false,
          createdAt: new Date(),
           updatedAt: new Date()
        },
        {
          id: 4,
          brand: "Maker's Mark",
          image: 'https://vignette.wikia.nocookie.net/whiskey/images/a/a1/Makersmark.jpg/revision/latest?cb=20111216193258',
          quantity: 10,
          stock: false,
          createdAt: new Date(),
           updatedAt: new Date()

        },
        {
          id: 5,
          brand: "Tito's Handmade Vodka",
          image: 'https://www.stevesliquor.com.au/assets/img/products/Steves-1096108.png',
          quantity: 10,
          stock: true,
          createdAt: new Date(),
           updatedAt: new Date()

        }
       ])
   

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {})
    
   
  }
}
}
