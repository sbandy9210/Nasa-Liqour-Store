const Router = require('express').Router()
const controller = require('../controller/AllControllers')
const middleware = require('../middleware')

// %%%%%%%%%%%%%% ORDER ROUTE %%%%%%%%%%%%%%%%%%%%%%%%
Router.get('/orders', controller.GetOrder)
Router.put()