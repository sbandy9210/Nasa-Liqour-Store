const { Orders, Owner, Vendor } = require('../models')
const { sequelize } = require('sequelize')


// %%%%%%%%%%%%%%%%% ORDER CONTROLLERS %%%%%%%%%%%%%%%
const getAllOrders = async (req, res) => {
    try {
        const order = await Orders.findAll()
        res.send(order)
    }catch (error) {
        throw error
    }

}

const updateOrder = async (req, res) => {
    try {
        const order = await Orders.update(
            {...req.body},
            {where: {id: req.params.order_id}, returning: true}
        )
        res.send(order)
    }catch (error){
        throw error
    }

}

const createOrder = async (req, res) => {
    try {
        const order = await Orders.create({...req.body})
        res.send(order)
    } catch (error) {
        throw(error)
    }

}

const deleteOrder = async (req, res) => {
    try {
        await Orders.destroy({ where: {id: req.params.order_id} })
        res.send({ msg: 'Order deleted', payload: req.params.orders_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

// %%%%%%%%%%%%% OWNER CONTROLLERS %%%%%%%%%%%%%%%%%%%%%
const getAllOwners = async (req, res) => {
    try {
        const owner = await Owners.findAll()
        res.send(owner)
    }catch (error) {
        throw error
    }

}

const updateOwner = async (req, res) => {
    try {
        const owner = await Owners.update(
            {...req.body},
            {where: {id: req.params.order_id}, returning: true}
        )
        res.send(owner)
    }catch (error){
        throw error
    }

}

const createOwner = async (req, res) => {
    try {
        const owner = await Owners.create({...req.body})
        res.send(owner)
    } catch (error) {
        throw(error)
    }

}

const deleteOwner = async (req, res) => {
    try {
        await Owners.destroy({ where: {id: req.params.order_id} })
        res.send({ msg: 'Owner deleted', payload: req.params.owners_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

// %%%%%%%%%%%% VENDOR CONTROLLERS %%%%%%%%%%%%%%%%%%%%%

const getAllVendors = async (req, res) => {
    try {
        const  vendor = await Vendors.findAll()
        res.send(vendor)
    }catch (error) {
        throw error
    }

}

const updateVendor = async (req, res) => {
    try {
        const order = await Vendors.update(
            {...req.body},
            {where: {id: req.params.order_id}, returning: true}
        )
        res.send(vendor)
    }catch (error){
        throw error
    }

}

const createVendor = async (req, res) => {
    try {
        const vendor = await Vendors.create({...req.body})
        res.send(vendor)
    } catch (error) {
        throw(error)
    }

}

const deleteVendor = async (req, res) => {
    try {
        await Vendors.destroy({ where: {id: req.params.order_id} })
        res.send({ msg: 'Order deleted', payload: req.params.vendors_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

modules.exports = {
    getAllOrders,
    updateOrder,
    createOrder,
    deleteOrder,
    getAllOwners,
    updateOwner,
    createOwner,
    deleteOwner,
    getAllVendors,
    updateVendor,
    createVendor,
    deleteVendor
}