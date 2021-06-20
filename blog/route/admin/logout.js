module.exports = (req,res)=>{
    req.session.destroy(function(){
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
        // 清除模板中的用户信息
        req.app.locals.userInfo = null
    })
}