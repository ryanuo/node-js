// 删除文章模块
// 定义一个自定义属性，首先要获取所删除的文章的id值，将获取到的id值传送到隐藏表单上
// 通过get/post请求获取表单的id 查询数据库信息
// 实现删除功能
const {Article} =require('../../model/article')
module.exports =async (req,res)=>{
    // res.send(req.query.id)
    const {id} =req.query
    // 通过获取的id值来查询数据库实现删除
    await Article.findOneAndDelete({_id:id})
    // 删除后使页面重定向到文章列表页
    res.redirect('/admin/article')
}
