const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
  'node_postgres',
  'postgres',
  'root',
  {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
  },
);