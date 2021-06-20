// 实现内容搜索的页面
// 实现标题搜索的页面
const { CsvData } = require('../../model/search')
module.exports = async (req, res) => {
    const { content } = req.body
    // 查询判断，正则运算
    let consearch = "/" + content + "/"
    let contents = eval(consearch)
    let searchs =await CsvData.findOne({content:contents}).lean()
    res.render('render',{
        searchs:searchs
    })
}
