'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Owner, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Orders.belongsTo(models.Vendor, {
        foreignKey: 'vendor_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Orders.hasMany(models.Products, {
        foreignKey: 'products_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      })
    }
  }
  Orders.init({
    id: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    image: DataTypes.STRING,
    stock: DataTypes.BOOLEAN,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {min: 0}
    },
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'owner',
        key: 'id'
      }
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'vendor',
        key: 'id'
      }
    }
  }, 
  {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders'
  });
  return Orders;
};