const express = require('express')
// 创建网站服务器
// 加入日期转换格式
const dateFormat = require('dateformat')
// 导入第三方模块
const template = require('art-template')
template.defaults.imports.dateFormat = dateFormat
// 导入环境模块
const path = require('path')
const app = express()
// 构建路由
const home = require('./route/home')
const admin = require('./route/admin')
// 引入body-parser模块
const bodyParser = require('body-parser')
// 导入第三方模块 morgan模块 将客户端发送到服务器端的请求信息打印到控制台中
const morgan = require('morgan')
// 导入配置模块
const config = require('config')
console.log(config.get('title'));
// 导入数据库模块
require('./model/connect')
require('./model/user')
// 导入session模块
const session = require('express-session')
// 拦截请求，配置session
app.use(session({
    secret: 'secret key',
    saveUnintialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
    // 设置登录的时长 一天不登录失效
}))
// // 导入用户创建数据
// require('./model/user')
// 拦截请求，为路由匹配请求路径
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))
// 获取系统的环境变量返回的值是对象,判断当前的环境
if (process.env.NODE_ENV == 'development') {
    console.log('当前的环境为开发环境');
    app.use(morgan('dev'))
} else {
    console.log('当前的环境为生产环境');
}
// console.log(process.env.NODE_ENV) 
// 告诉express框架模板的位置
app.set('views', path.join(__dirname, 'views'))
// 告诉express框架模板的默认后缀
app.set('view engine', 'art')
// 当渲染的后缀为art，所使用的模板引擎，第一个参数表示模板后缀
app.engine('art', require('express-art-template'))
// 处理post请求参数
app.use(bodyParser.urlencoded({ extended: false }))
// 拦截请求，判断用户登录状态,加入中间件
app.use('/admin', require('./middleware/loginGuard'))
app.use('/home', home)
app.use('/admin', admin)
// 设置错误中间件
app.use((err, req, res, next) => {
    // 将字符串解析成对象的形式
    let result = JSON.parse(err)
    // res.send(result)
    // 对返回的对象进行遍历，
    let params = []
    for (let attr in result) {
        // 此时如果对象中属性没有path，将其他的属性使用数组推送的方法将字符推送到数组中
        if (attr != 'path') {
            params.push(attr + '=' + result[attr])
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`)
})
// 监听端口
app.listen(80)
console.log('网站服务器启动成功');