// 对某个用户的信息进行修改，首先将用户提交的信息获取，获取到用户提交的信息
// 通过从地址栏获取到的id值，查询数据库的信息，
// 并将用户提交的信息与数据库中的密码信息进行比对，
// 如果比对成功则执行修改信息，比对失败后将错误的信息进行拦截 并将错误的信息通过重定向返回到地址栏
// 将数据库查询信息和哈希加密的方法导入到页面中
const { User, md5Crypto, mdsecret,validate } = require('../../model/user')
// 将模块抛出
module.exports = async (req, res, next) => {
    // 获取用户提交的数据信息
    // const body = req.body
    // 使用对象解构的方法,将用户提交的数据解构
    const { username, email, password, role, state } = req.body
    const {id,page} = req.query
    // 异步函数,在用户修改的时候进行try catch判断
    try{
        await validate(req.body)
    }catch(e){
        return res.redirect(`/admin/user-edit?id=${id}&page=${page}&message=${e.message}`)
    }
    // 通过获取的id值查询数据库信息
    let user = await User.findOne({ _id: id })
    // 获取用户提交的password值，并于数据库的password值进行比对
    // req.body.password
    // 将获取到密码进行加密计算
    let passwords = md5Crypto(password + mdsecret)
    if (passwords == user.password) {
        // 密码比对成功后使用id属性查询数据库，并且将数据使用update方法更新
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        })
        // 将页面重定向到列表页
        res.redirect(`/admin/user?page=${page}`)
        // res.send('密码比对成功')
    } else {
        // 定义一个错误对象,密码比对失败将path还是指向user-edit界面并且将错误进行返回
        let obj = { 'path': '/admin/user-edit', 'message': '您输入的密码有误，请重新输入', 'id': id,'page':page }
        // 将错误的信息进行拦截分析，加入到中间件中,将对象形式转化为json字符串的形式
        next(JSON.stringify(obj))
        // 将错误的信息通过重定向到某个地址
        // res.send('密码比对失败')
    }
}