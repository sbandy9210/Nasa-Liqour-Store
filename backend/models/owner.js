'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Owner.hasMany(models.Orders, {
        foreignKey: 'owner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Owner.hasMany(models.Vendors, {
        foreignKey: 'owner_id',
        onDelete: 'CASCASDE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Owner.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owner',
    tableName: 'owner'
  });
  return Owner;
};