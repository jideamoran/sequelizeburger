// import mysql connection 

var connection = require("../config/connection.js");

// function selectAll()
// function insertOne()
// function updateOne()

// function to convert object key/value to SQL
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
// check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
// if string with SVGPathSegClosePath, add quotations

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

// object for all SQL statements


var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    // inserts item into burgers table

    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString)

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // update function for burgers

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// export orm to cat model

module.exports = orm;