// 实现标题搜索的页面
const { CsvData } = require('../../model/search')
const path = require('path')

// const { json } = require('body-parser')

module.exports = async (req, res) => {
    const { title } = req.body
    // 查询判断，正则运算
    let consearch = "/" + title + "/"
    let titles = eval(consearch)
    console.log(titles);
    let searchs =await CsvData.findOne({title:titles}).lean()
    // console.log(chaz.channelName);
    // 使用遍历json数据上传到数据库
    // let converter = csv()
    //     .fromFile(pathdir)
    //     .then((json) =>{
    //        jsondata=JSON.stringify(json);
    //     })
    //     console.log(jsondata);
    res.render('render',{
        searchs:searchs
    })
    // res.redirect('/search')
}
