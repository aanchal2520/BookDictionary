const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'slpa76542',
    database: 'bookdictionary'
});

module.exports = db;