const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('itmanagementportal_db', 'root', 'Riki@0376', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;