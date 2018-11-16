/*
 * @Author: dongjingze 
 * @Date: 2018-11-16 10:28:40 
 * @Last Modified by: dongjingze
 * @Last Modified time: 2018-11-16 10:31:27
 */

var mysql = require('mysql');

var config = {
    port: 3306,
    user: 'root',
    database: 'lemon-last',
    password: 'root'
}

var pool = mysql.createPool(config);

module.exports = sqlFn;


/**
 * 
 * @param {*} sql sql语句
 * @param {*} query 参数的数组
 * @param {*} fn 
 */
function sqlFn(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];

    pool.getConnection(connectionCallback);

    function connectionCallback(err, con) {
        if (err) {
            fn(err)
        } else {
            con.query(sql, query, function(err, result) {
                queryCallback(err, result);
                con.release();
            })
        }
    }

    function queryCallback(err, result) {
        if (err) {
            fn(err);
        } else {
            fn(null, result);
        }
    }

}