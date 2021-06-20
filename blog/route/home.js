const express = require('express')
// 博客前台管理页面
const home = express.Router()
// 创建首页的路由
home.get('/',require('./home/index'))
// 创建文章的路由
home.get('/article',require('./home/article'))
// 创建首页退出路由
home.get('/logout',require('./home/logout'))
// 创建评论路由
home.post('/comment',require('./home/comment'))
// 将路由对象作为模块成员进行导出
module.exports = home