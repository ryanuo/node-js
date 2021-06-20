// 导入文章数据集合
const { Article } = require('../../model/article')
module.exports = async (req, res) => {
    // 标识
    res.app.locals.currentLink = 'acticle'
    // 对文章页面进行编辑操作
    // 点击编辑按钮 获取当前用户的id值，通过id值然后对数据库进行查询，将查询到的数据分别渲染到页面中
    // 添加提交路由
    // 将重新修改的页面进行更新的操作，并且在更新数据库之前先对修改的数据进行数据分析
    // 将用户提交的数据赋值给数据库查询到的数据
    // 获取请求的id值,错误信息，以及页码数
    const { id,page,message } = req.query
    if(id){
        // 通过获取的id值进行数据的查找
        let article = await Article.findOne({ _id: id })
        // 将获取到数据入到页面中
        // 通过对地址栏中id值的判断来改变请求的地址
        // res.send('进入编辑页面')
        let link = `/admin/article-modify?id=${id}&page=${page}`
        res.render('admin/article-edit',{
            message: message,
            article: article,
            link:link
        })
    }else{
        // res.send('进入文章发布页面')
        let link = `/admin/article-add`
        res.render('admin/article-edit',{
            link:link,
            message:message
        })
    }

}