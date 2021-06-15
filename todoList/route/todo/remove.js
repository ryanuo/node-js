const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    console.log(req.body);
    let { task } = req.body
    // 创建数据库集合
    try {
        await todoList.findOneAndDelete({
            task
        },(err,doc)=>{
            // console.log(err);
            // console.log(doc);
            if(!err){
                res.send({message:'删除成功',code:1})
            }
        })
    } catch (error) {
        res.send({message:'删除失败',code:-1})
    }
}