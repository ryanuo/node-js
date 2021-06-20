const {Article} = require('../../model/article')
const pagination = require('mongoose-sex-page')
// const dateFormat = require('dateformat')
module.exports = async (req,res)=>{
    res.app.locals.currentLink = 'acticle'
    // 获取地址栏中的page页
    const { page }= req.query
    // 查询数据库中的所有数据,链式查找根据关联的id值查询 使用populate方法查询 括号内添加关联的属性
    // 利用 lean（） 方法将多级联合的结果转化为普通对象 ，缓解两者的冲突。
    // let article = await Article.find().populate('author').lean()
    // console.log(article);
    // 获取数据集合中的所有数据
    let total = await Article.countDocuments({})
    // res.send(article)
    // 定义每页显示的数据
    let pagesize = 5
    let pagecount = Math.ceil(total/pagesize)
    // page表示获取的是第几页数据
    // size表示每一页数据的数量
    // display表示页码
    // exec()方法避免多级查询与渲染之间发生冲突
    // 在进行分页操作时可以使用自定义的参数也可以使用article返回的参数
    let articles = await pagination(Article).find().page(page).size(pagesize).display(pagecount).populate('author').exec()
    // console.log(articles);
    // 像转换为字符串类型，在转换为对象的类型
    let str = JSON.stringify(articles);
    let articlejson = JSON.parse(str);
    // res.send(articlejson)
    res.render('admin/article',{
        articles: articlejson,
        total:total,
        page:page,
        pagecount:pagecount
    })
}