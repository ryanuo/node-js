
const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    // console.log(req.body);
    let { id,task } = req.body
    // 创建数据库集合
    try {
        await todoList.findOneAndUpdate({
            _id:id
        },{
            task:task
        },(err,doc)=>{
            // console.log(err);
            // console.log(doc);
            if(!err){
                res.send({message:'更新成功',code:1})
            }
        })
    } catch (error) {
        res.send({message:'更新失败',code:-1})
    }
}