
const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    // console.log(req.body);
    let { id,task,completed } = req.body

    // 创建数据库集合
    try {
        if(task){
            await todoList.findOneAndUpdate({
                _id:id
            },{
                task:task
            },(err,doc)=>{
                if(!err){
                    res.send({message:'更新成功',code:1})
                }
            })
        }else if(completed){
            await todoList.findOneAndUpdate({
                _id:id
            },{
                completed
            },(err,doc)=>{
                if(!err){
                    res.send({message:'更新成功',code:1})
                }
            })
        }else{
            await todoList.findOneAndUpdate({
                _id:id
            },{
                completed:false
            },(err,doc)=>{
                if(!err){
                    res.send({message:'更新成功',code:1})
                }
            })
        }
        
    } catch (error) {
        res.send({message:'更新失败',code:-1})
    }
}