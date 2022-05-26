const mysql = require("mysql");
const dbConfig = require("../db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

connection.connect(error => {
    if (error) throw error;
    console.log("Conexion a BD creada exitosamente.");
});

module.exports = connection;