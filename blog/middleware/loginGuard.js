module.exports = (req,res,next)=>{
    if(req.url != '/login' && !req.session.username ){
        res.redirect('/admin/login')
    }else{
        // 用户是登录状态，将请求放行
        if(req.session.role == 'normal'){
            return res.redirect('/home')
        }
        next()
    }
}
