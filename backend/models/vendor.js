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
      Vendor.hasMany(models.Order, {
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
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
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
    tableName: 'vendors'
  });
  return Vendor;
};