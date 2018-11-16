var express = require('express');
var router = express.Router();

var userApi = require('./user');

/* 添加用户. */
router.post('/', userApi.addUser);

//查询用户是否存在

module.exports = router;