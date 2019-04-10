var mysql = require("mysql");
var connection;
// link mysql

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 8080,
        user: 'root',
        password: 'hacktheplanet',
        database: 'burgers_db'
    });
};





// making connection

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
        console.log("Connected As Id" + connection.threadId);
});

// Export connection to ORM

module.exports = connection;

