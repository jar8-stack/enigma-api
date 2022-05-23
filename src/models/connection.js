const mysql= require('mysql');

// Initialize pool
var pool =  mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  port: '4502',
  user: 'root',
  password: '123456',
  database: 'enigma',
  debug    :  false
});    


module.exports = pool;