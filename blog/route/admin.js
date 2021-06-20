const express = require('express')
// 创建admin路由
const admin = express.Router()
// 将路由对象作为模块成员进行导出,登录页面
admin.post('/login',require('./admin/login'))
// 渲染登录页面
admin.get('/login',require('./admin/loginPage'))
// 创建用户列表路由
admin.get('/user',require('./admin/user'))
// msg:req.session.username
// 实现页面的退出
admin.get('/logout',require('./admin/logout'))
// 创建用户添加路由,编辑和添加用户的信息
admin.get('/user-edit',require('./admin/useredit'))
admin.post('/user-edit',require('./admin/user-edit-fn'))
// 对用户的信息进行修改
admin.get('/user-modify',require('./admin/user-modify'))
admin.post('/user-modify',require('./admin/user-modify'))
// 对用户的信息进行删除操作
admin.get('/user-delete',require('./admin/user-delete'))
// 文章页面路由
admin.get('/article',require('./admin/article'))
// 创建文章添加功能的路由
admin.post('/article-add',require('./admin/article-add'))
// 文章管理页面
admin.get('/article-edit',require('./admin/article-edit'))
// 文章修改页面进行post请求
admin.post('/article-modify',require('./admin/article-modify'))
// 文章删除请求
admin.get('/article-delete',require('./admin/article-delete'))
// 建立评论路由
module.exports = admin