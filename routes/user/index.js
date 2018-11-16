//引入sql语句
var sql = require('../../mysql/sql')
    //引入sql语句
var query = require('../../mysql')

function addUser(req, res, next) {

    var name = req.body.name;

    var uid = req.body.uid;
    if (!name) {
        res.json({ code: 2, msg: "用户名不存在" });
        return
    } else if (!uid) {

    }

    //判断用户名是否存在
    function isHas() {
        query(sql.SELECT_ISHAS, [name], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: "服务器错误" })
            } else {
                if (result.length > 0) {
                    res.json({ code: 3, msg: "用户名已存在" })
                } else {
                    add();
                }
            }
        })
    }

    function add() {
        query(sql.ADD_USER, [], function() {

        })
    }

}

module.exports = {
    addUser: addUser
}