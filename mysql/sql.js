module.exports = {
    //添加用户
    ADD_USER: "insert into userlist (uid,name) values (?,?)",
    //查是用户否存在
    SELECT_ISHAS: "select * from userlist where name=?"
}