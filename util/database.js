const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
     'root',
      'Rohit2510@', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;