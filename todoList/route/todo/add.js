const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    // console.log(req.body);
    let { task } = req.body
    // 创建数据库集合
    try {
        await todoList.create({
            task,
            completed: false
        })
        res.send({message:'添加成功',code:1})
    } catch (error) {
        res.send({message:'添加失败',code:-1})
    }
}