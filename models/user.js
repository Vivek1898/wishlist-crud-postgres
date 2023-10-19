const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        columnName: "first_name",
        columnType: 'varchar(255) NOT NULL'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        columnName: "email",
        columnType: 'varchar(255) NOT NULL'
    },
}, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
});

module.exports = User;
