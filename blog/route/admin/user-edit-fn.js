// 引入数据库的集合模块和加密函数,引入加密字符串和验证方法
const { User,md5Crypto,mdsecret,validate } = require('../../model/user')
module.exports = async (req,res)=>{
    // 对用户的信息进行规则验证，调用user中的validate方法
    try{
        await validate(req.body)
    }catch(e){
        return res.redirect(`/admin/user-edit?message=${e.message}`)
    }
    // 查询数据库中的用户信息，根据邮箱地址来判断是否存在，如果存在将返回错误，并且重定向为注册界面
    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.redirect(`/admin/user-edit?message=邮箱地址已经存在`)
    }
    // 对用户提交的密码进行加密
    let secret = md5Crypto(req.body.password + mdsecret)
    // res.send(req.body)
    // 将用户提交上来的密码进行替换
    req.body.password = secret
    // 将用户提交的数据通过create方法提交到数据库中
    await User.create(req.body)
    // 添加成功后将页面进行重定向
    res.redirect(`/admin/user`)
}