const formidable = require("formidable")
const path = require('path')
const csv = require('csvtojson')
const { CsvData } = require('../../model/search')
module.exports = (req, res) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', '/csv/uploads')
    // 保留上传文件的后缀
    form.keepExtensions = true
    // 解析表单
    form.parse(req,async (err, fields, files) => {
        // 1. err表示错误对象，如果表单解析失败 err里面存储错误信息 如果表单解析成功
        // fields表示普通的表单数据
        // files表示保存了和上传文件相关的数据
        // 使用split方法分隔字符串 分理出文件名称
        // console.log(files.file.path.split('uploads\\')[1]);
        csv_file = files.file.path.split('uploads\\')[1]
        // 获取上传文件的json中的数据
        if(csv_file.split('.')[1] == 'csv'){
            let arrjson = [];
            const pathdir = path.join(__dirname, '../', '../', '/csv/uploads/',csv_file)
            const json = await csv().fromFile(pathdir);
            await arrjson.push(json);
            // 创建集合规则
            await arrjson[0].forEach(async (item, index) => {
                // console.log(item);
                await CsvData.create({
                    content: item.content,
                    title: item.title,
                    channelName: item.channelName
                })
                // console.log(`正在创建第${index}个`);
            })
            const results = 'csc文件上传数据库成功'
            await res.render('index',{
                results: results
            })
        }else{
            let results = '文件上传失败'
            res.render('index',{
                results: results
            })
        }
        // 生成文件表单信息,使用字符串截取文件名称
        // res.send(files)
    })
}