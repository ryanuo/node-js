// 添加处于首页状态下退出登录的模块 创建路由
module.exports = (req,res)=>{
    req.session.destroy(function(){
        res.clearCookie('connect.sid');
        res.redirect('/home');
        // 清除模板中的用户信息
        req.app.locals.userInfo = null
    })
}