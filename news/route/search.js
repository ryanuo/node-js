// 创建路由的页面
const express = require('express')
// 创建admin路由
const search = express.Router()
// 创建文章首页
search.get('/',(req,res)=>{
    res.render('index')
    // res.send('ok')
})
// 创建标题的查询请求
search.post('/searchtitle',require('./search/searchtitle'))
// 创建内容查询请求
search.post('/searchcon',require('./search/searchcon'))
// 创建加入数据库的请求路由
search.post('/add',require('./search/add'))
module.exports = search
