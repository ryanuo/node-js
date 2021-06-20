// 导入用户集合构造函数,导入加密时需要的字符串
const { User,md5Crypto,mdsecret } = require('../../model/user')
module.exports=async (req,res)=>{
    // 进行二次验证，浏览器经常被禁用JavaScript
    const {email,password} = req.body;
    if(email.trim().length == 0 || password.trim().length == 0) return res.status(400).render('admin/err',{msg:'邮箱地址或者密码错误'})
    // 使用findone方法查询用户信息
    // 如果查询到了用户user变量的值时对象类型，没有查询到对象为null
    let user = await User.findOne({email}) //es6规定如果对象属性和属性参数一样可以省略
    if(user){
        // 并且将传递过来的密码和用户信息中的密码进行比对，将加密后的密码与数据库中的密码进行比对
        if(md5Crypto(password + `${mdsecret}`) == user.password){
            // 相等表示登录成功
            req.session.username = user.username
            // 将用户的角色存储到session中 对session进行拦截判断
            req.session.role = user.role
            // res.status(200).send('登录成功')
            // 用户的信息,app为req下的属性
            req.app.locals.userInfo = user
            if(user.role == 'normal'){
                res.redirect('/home')
            }else{
                res.redirect('/admin/user?page=1')
            }
        }else{
            res.status(400).render('admin/err',{msg:'用户输入的邮箱地址或者密码错误'})
        }

    }else{
        res.status(400).render('admin/err',{msg:'用户输入的邮箱地址或者密码错误'})
    }
}

