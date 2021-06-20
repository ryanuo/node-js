const { User } = require('../../model/user')
module.exports =async (req,res)=>{
    // 实现页面的分页功能
    // 使用数据查询方法来统计数据集合中总的数量
    // 定一个页面数据的大小，并且根据数据库总的数量实现页码的计算，使用countDocuments({}) {}表示查询的标准 方法  
    // 使用limit() 和skip() 来实现页面的分页，limit表示限制查询页面的信息数量，skip表示数据的查询起始的位置
    // 查询数据库集合的数据总数
    // 对文章标识 标识文章所访问的页面情况
    res.app.locals.currentLink = 'user'
    let total = await User.countDocuments({})
    // 定义一个页面所含数据的数量
    let pagecount = 5
    // 计算页码,ceil表示的是向上取整，floor表示的是向下取整
    let pages = Math.ceil(total/pagecount)
    // 计算查询截取的位置
    if(req.query.page > pages){
        res.render('admin/err',{
            msg:'用户信息查询失败'
        })
    }else{
        var page = req.query.page || 1
    }
    // let page = req.query.page || 1
    let start = (page-1)*pagecount
    let user =await User.find().limit(pagecount).skip(start)
    res.render('admin/user',{
        user: user,
        total:total,
        page:page,
        pages:pages
    })
}