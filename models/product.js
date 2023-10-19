const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },


}, {
    tableName: 'product',
    timestamps: false,
    underscored: true,
});

module.exports = Product;