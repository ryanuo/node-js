// 建立评论的路由
//  只有当用户登录之后才可以使用评论的模块
// 创建评论的模块
// 获取用户在文本框内输入的内容，将此内容通过所在的文章的id值新建一个数据库或者上传到文章的数据库页面
// 用户需要登录后才能使用评论
// 在用户登录后判断如果登录的用户是超级管理员则将页面重定向到博客惯例页面如果是普通用户则将页面重定向到文章的首页
// 将登录用户的role存储到session中，在对session进行拦截判断
// 并且将登录后的首页信息改为用户的信息
// 对评论的状态进行配置，当用户登录后 在本地已经存储到一个userInfo，判断userInfo是否存在，如果存在则将评论模块呈现出来，如果未登录则将评论状态和首页头部的用户状态关闭

// 渲染评论页面直接在文章页面渲染
// 将用户信息渲染到页面页
// 创建评论路由
// 根据评论集合创建规则，上传集合对象
// post请求后将页面重定向未当前页面
const { Comment } = require('../../model/comment')
module.exports = async (req, res) => {
    // res.send(req.body)
    const { uid, aid, comment } = req.body
    // 将用户提交的信息导入到数据库中 编辑用户创建规则
    await Comment.create({
        uid: uid,
        aid: aid,
        comment: comment,
        adate: new Date()
    })
    // 创建完成后将页面重定向到文章页面
    res.redirect(`/home/article?id=${aid}`)
}