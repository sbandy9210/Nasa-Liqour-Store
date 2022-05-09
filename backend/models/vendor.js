'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Orders, {
        foreignKey: 'vendor_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Vendor.belongsTo(models.Owner, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      })
    }
  }
  Vendor.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'owner',
        key: 'id'
      }

    } 
  }, {
    sequelize,
    modelName: 'Vendor',
    tableName: 'vendor'
  });
  return Vendor;
};