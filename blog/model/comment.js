const mongoose = require('mongoose')
// 创建评论的集合规则
const commentSchema = mongoose.Schema({
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Article'
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    adate:{
        type:Date
    },
    comment:{
        type:String,
        required:true
    }
})
// 创建用户集合
const Comment = mongoose.model('Comment',commentSchema)
// 将创建的用户集合抛出
module.exports = {
    Comment
}