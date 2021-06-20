// 使用第三方模块formidable获取post信息
const  formidable  = require("formidable")
const {validate,Article} = require('../../model/article')
const path = require('path')
module.exports = (req,res) =>{
    // 对post的数据进行分析
    // res.send(req.body) 无法获取二进制的信息
    const form = new formidable.IncomingForm()
    // 配置上传文件的后缀
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    // 保留上传文件的后缀
    form.keepExtensions = true
    // 解析表单
    form.parse(req, async (err,fields,files) =>{
        // 1. err表示错误对象，如果表单解析失败 err里面存储错误信息 如果表单解析成功
        // fields表示普通的表单数据
        // files表示保存了和上传文件相关的数据
        // 使用split方法分隔字符串
        // console.log(files.cover.path.split('public')[1]);
        // res.send(fields)
        // res.redirect('/admin/article?page=1')
        // 将上传来的post信息进行判断后更新信息
        // validate是一个异步函数
        const {id} = req.query
        try{
           await validate(fields)
        }
        catch(e){
            return res.redirect(`/admin/article-edit?id=${id}&message=${e.message}`)
        }
        // res.send(fields)
        // 判断之后可以执行更新操作,保存文件需要单独处理，这里使用到了拼接对象和转换绝对地址为相对地址，并更新到数据库
        const cover = {cover:files.cover.path.split('public')[1]}
        const obj = Object.assign(fields,cover)
        // console.log(obj);
        await Article.updateOne({_id:id},obj)
        // 执行完更新操作后对页面进行重定向到文章列表页
        res.redirect('/admin/article?page=1')
    })
    // res.send('ok')
}