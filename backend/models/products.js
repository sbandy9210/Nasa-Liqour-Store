'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Orders, {
        foreignKey: 'orders_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Products.init({
    productID: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.BOOLEAN,
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products'
  });
  return Products;
};