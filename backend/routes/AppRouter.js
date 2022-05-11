const Router = require('express').Router()
const controller = require('../controller/AllControllers')
const middleware = require('../middleware')

// %%%%%%%%%%%%%% ORDER ROUTE %%%%%%%%%%%%%%%%%%%%%%%%
Router.get('/orders', controller.getAllOrders)

Router.put('/order/update', middleware.stripToken, middleware.verifyToken, controller.updateOrder)

Router.post('/order/create', middleware.stripToken, middleware.verifyToken, controller.createOrder)

Router.delete('/order/delete/:order_id', middleware.stripToken, middleware.verifyToken, controller.deleteOrder)


// %%%%%%%%%%%%%% OWNER ROUTE %%%%%%%%%%%%%%%%%%%%%%%%
Router.get('/owner', controller.getAllOwners)

Router.put('/owner/update', middleware.stripToken, middleware.verifyToken, controller.updateOwner)

Router.post('/owner/create', middleware.stripToken, middleware.verifyToken, controller.createOwner)

Router.delete('owner/delete/:owner_id', middleware.stripToken, middleware.verifyToken, controller.deleteOwner)


// %%%%%%%%%%%%%% VENDOR ROUTE %%%%%%%%%%%%%%%%%%%%%%%%
Router.get('/vendor', controller.getAllVendors)

Router.put('/vendor/update', middleware.stripToken, middleware.verifyToken, controller.updateVendor)

Router.post('/vendor/create', middleware.stripToken, middleware.verifyToken, controller.createVendor)

Router.delete('/vendor/delete/:vendor_id', middleware.stripToken, middleware.verifyToken, controller.deleteVendor)


// %%%%%%%%%%%%%% PRODUCTS ROUTE %%%%%%%%%%%%%%%%%%%%%%%%
Router.get('/products', controller.getAllProducts)

Router.put('/products/update', middleware.stripToken, middleware.verifyToken, controller.updateProduct)

Router.post('products/create', middleware.stripToken, middleware.verifyToken, controller.createProduct)

Router.delete('products/delete/:delete_id', middleware.stripToken, middleware.verifyToken, controller.deleteProduct)


// %%%%%%%%%%%%%% AUTHENTICATION ROUTE %%%%%%%%%%%%%%%%%%
// Router.post()
// Router.put()
// Router.get()


module.exports = Router