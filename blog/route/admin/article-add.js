const  formidable  = require("formidable")

// 导入第三方模块 formidable
const path = require('path')

const {Article} = require('../../model/article')

module.exports = (req,res) =>{
    // 创建表单解析对象
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
        // res.send(files)
        await Article.create({
            title: fields.title,
            author:fields.author,
            publishDate:fields.publishDate == null ? Date.now : fields.publishDate,
            cover:files.cover.path.split('public')[1],
            content:fields.content
        })
        res.redirect('/admin/article?page=1')
    })
    // res.send('ok')
}