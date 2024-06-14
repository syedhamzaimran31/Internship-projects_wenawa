const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('signup', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});
module.exports = sequelize