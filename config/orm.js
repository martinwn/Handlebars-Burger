const connection = require("./connection.js");

const orm = {
    selectAll: function (table, callback) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    insertOne: function (table, column_name, name, callback) {
        // var queryString = 'INSERT INTO ' + table + '(' + column_name + ')' + "VALUES('" + [name] + "')";
        const queryString = `INSERT INTO ${table}(${column_name})VALUES('${name}');`;
        console.log(queryString);
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    updateOne: function (table, column_name, burger_id, callback) { 
        const queryString = `UPDATE ${table} SET ${column_name}=1 WHERE id=${burger_id};`; console.log(queryString);
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    deleteOne: function (table, burger_id, callback) {
        const queryString = `DELETE FROM ${table} WHERE id=${burger_id};`;
        connection.query(queryString, function(error, result) {
            if (error) throw error;
            callback(result);
        });
    }
};

module.exports = orm;