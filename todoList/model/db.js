// 创建数据库及集合规则，将信息抛出
const mongoose = require('mongoose')
let todoSchema =new mongoose.Schema({
    task:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
// 创建集合
let todoList = mongoose.model('todoList',todoSchema)
module.exports = { todoList } 