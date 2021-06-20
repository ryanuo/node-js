const {Article} = require('../../model/article')
// 导入分页模板
const pagitation = require('mongoose-sex-page')
// 导入文章数据信息
module.exports =async (req,res) =>{
    const {page} = req.query
    console.log(page);
    // 控制页面的文章数量
    const articlesize = 6
    // 计算总的页数
    let pagesize = await Article.countDocuments({}) / articlesize
    // 查询数据库中的信息使信息展示到文章首页
    let articles =await pagitation(Article).page(page).size(articlesize).display(pagesize).populate('author').exec()
    let str = JSON.stringify(articles);
    let articlejson = JSON.parse(str);
    // let pagesize = articles.total
    // 将查询出来的数据展示到页面中
    // console.log(articles);
    res.render('home/default',{
        articles:articlejson
    })
}