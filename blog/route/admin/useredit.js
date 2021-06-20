
// 引入数据库模块,以对象的模式导入
const { User} = require('../../model/user')
// 对页面的数据进行判断如果是地址栏中有id属性则要从数据库中查询出数据然后将页面进行渲染并且将查询到的数据传入到页面中
module.exports =async (req,res)=>{
    // 这里使用数组解构,message表示错误信息
    res.app.locals.currentLink = 'user'
    const {message,id,page} = req.query
    // console.log(req.query);
    if(id){
        // 修改用户信息，查询用户的信息，根据地址栏中的id值来查询数据库
        let user = await User.findOne({_id:id})
        // 然后进行页面的渲染将查询到的数据写入到页面中,页面上加上page使得页面返回时能重定向到修改的指定位置，并且给错误的信息也加上页面
        res.render('admin/user-edit',{
            message:message,
            user:user,
            link:`/admin/user-modify?id=${id}&page=${page}`,
            button: '修改'
        })
    }else{
        res.render('admin/user-edit',{
            message:message,
            link:`/admin/user-edit?page=${page}`,
            button: '添加'
        })
    }
}