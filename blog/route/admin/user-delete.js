// 首先通过点击删除按钮将用户的id值添加到表单隐藏域中
// 然后通过点击提交按钮将隐藏域中的id值添加到删除表单的地址栏
// 添加删除的路由
// 通过用户提交的id值执行数据库的查询，并且使用findOneAndDelete的方法将指定用户的值删除
// 最后使页面重定向到初始的列表页面
// 注意查询数据库为异步操作
// 将删除的页面重定向到删除初始页面
const { User } = require('../../model/user')
module.exports = async (req,res) =>{
    // 获取提交的地址信息
    const {id,page} =req.query
    // res.send(page)
    // // 通过获取到的id值然后对数据库进行查询删除
    await User.findOneAndDelete({_id:id})
    // // 然后将页面重定向到初始的位置
    res.redirect(`/admin/user?page=${page}`)
}
