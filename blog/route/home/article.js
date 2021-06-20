const { Article } = require("../../model/article")
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    const { id } = req.query
    // 点击首页的超链接后 使用地址栏中的id值来获取文章主要的内容，在渲染页面
    // res.send(id)
    let article = await Article.findOne({_id: id }).populate('author').lean()
    // res.send(article)
    // 创建评论的模块 根据获取的id值来判断
    // 将查询到的信息返回到页面中，可以给评论页添加分页的效果
    let comment = await Comment.find({aid:id}).populate('aid').populate('uid').lean()
    // res.send(comment)
    res.render('home/article', {
        articles: article,
        comments: comment
    })
    // res.redirect(`/home/article`)
}