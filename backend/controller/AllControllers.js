const { Order, Owner, Vendor, Product } = require('../models')
const { sequelize } = require('sequelize')


// %%%%%%%%%%%%%%%%% ORDER CONTROLLERS %%%%%%%%%%%%%%%
const getAllOrders = async (req, res) => {
    try {
        const order = await Order.findAll()
        res.send(order)
    } catch (error) {
        throw error
    }

}

const updateOrder = async (req, res) => {
    try {
        const order = await Order.update(
            {...req.body},
            {where: {id: req.params.orders_id}, returning: true}
        )
        res.send(order)
    } catch (error){
        throw error
    }

}

const createOrder = async (req, res) => {
    try {
        const order = await Order.create({...req.body})
        res.send({msg:'Order Created'})
    } catch (error) {
        throw(error)
    }

}

const deleteOrder = async (req, res) => {
    try {
        await orders.destroy({ where: {id: req.params.order_id} })
        res.send({ msg: 'Order deleted', payload: req.params.order_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

// %%%%%%%%%%%%% OWNER CONTROLLERS %%%%%%%%%%%%%%%%%%%%%
const getAllOwners = async (req, res) => {
    try {
        const owner = await Owner.findAll()
        res.send(owner)
    } catch (error) {
        throw error
    }

}

const updateOwner = async (req, res) => {
    try {
        const owner = await Owner.update(
            {...req.body},
            {where: {id: req.params.owner_id}, returning: true}
        )
        res.send(owner)
    } catch (error){
        throw error
    }

}

const createOwner = async (req, res) => {
    try {
        const owner = await Owner.create({...req.body})
        res.send(owner)
    } catch (error) {
        throw(error)
    }

}

const deleteOwner = async (req, res) => {
    try {
        await Owner.destroy({ where: {id: req.params.owner_id} })
        res.send({ msg: 'Owner deleted', payload: req.params.owner_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

// %%%%%%%%%%%% VENDOR CONTROLLERS %%%%%%%%%%%%%%%%%%%%%

const getAllVendors = async (req, res) => {
    try {
        const  vendor = await Vendor.findAll()
        res.send(vendor)
    } catch (error) {
        throw error
    }

}

const updateVendor = async (req, res) => {
    try {
        const vendor = await Vendor.update(
            {...req.body},
            {where: {id: req.params.vendor_id}, returning: true}
        )
        res.send(vendor)
    } catch (error){
        throw error
    }

}

const createVendor = async (req, res) => {
    try {
        const vendor = await Vendor.create({...req.body})
        res.send(vendor)
    } catch (error) {
        throw(error)
    }

}

const deleteVendor = async (req, res) => {
    try {
        await Vendors.destroy({ where: {id: req.params.vendor_id} })
        res.send({ msg: 'Order deleted', payload: req.params.vendor_id, status: 'OK'})
    } catch (error) {
        throw error
    }

}

// %%%%%%%%%%%% PRODUCTS CONTROLLERS %%%%%%%%%%%%%%%%%%%%
const GetAllProducts = async (req, res) => {
    try {
        const  product = await Product.findAll()
        res.send(product)
    } catch (error) {
        throw error
    }

}

const UpdateProduct = async (req, res) => {
    try {
        const product = await Product.update(
            {...req.body},
            {where: {id: req.params.product_id}, returning: true}
        )
        res.send(product)
    } catch (error){
        throw error
    }

}

const CreateProduct = async (req, res) => {
    try {
        const product = await Product.create({...req.body})
        res.send(product)
    } catch (error) {
        throw(error)
    }

}

const DeleteProduct = async (req, res) => {
    try {
        console.log(req.params)
        await Product.destroy({ where: {id: req.params.id} })
        res.send({ msg: 'Product deleted', payload: req.params.id, status: 'OK'})
    } catch (error) {
        console.log(req.params)
        throw error
    }

    // try {
    //     const del = parseInt(req.params.product.ID)
    //     const deleteProduct = await Product.destroy({ where: {ID: del}}) 
    //     res.send({msg: `The product has been deleted`}) 
    // } catch (error) {
    //     throw error
    // }

}

module.exports = {
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
    deleteVendor,
    GetAllProducts,
    UpdateProduct,
    CreateProduct,
    DeleteProduct
}