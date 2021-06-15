const express = require('express')
// 创建网站服务器
// 加入日期转换格式
const dateFormat = require('dateformat')
// 导入第三方模块
const template = require('art-template')
const config =require('config')
template.defaults.imports.dateFormat = dateFormat
// 导入环境模块
const path = require('path')
const app = express()
// 构建路由
// 引入body-parser模块
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// 导入第三方模块 morgan模块 将客户端发送到服务器端的请求信息打印到控制台中
const morgan = require('morgan')
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))
// 导入配置模块
// 查询数据库信息
app.get('/todo',require('./route/todo/list'))
// 添加数据库
app.post('/add',require('./route/todo/add'))
// 删除某个数据
app.post('/del',require('./route/todo/remove'))
// 更新某个数据
app.post('/update',require('./route/todo/update'))
app.post('/delall',require('./route/todo/removeall'))
require('./model/connect')
// 告诉express框架模板的位置
app.set('views', path.join(__dirname, 'views'))
// 告诉express框架模板的默认后缀
app.set('view engine', 'art')
// 当渲染的后缀为art，所使用的模板引擎，第一个参数表示模板后缀
app.engine('art', require('express-art-template'))
// 处理post请求参数
// 设置错误中间件

app.listen(80)
console.log('网站服务器启动成功');