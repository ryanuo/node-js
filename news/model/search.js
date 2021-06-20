// 创建数据库及集合规则，将信息抛出
const mongoose = require('mongoose')
let csvdataSchema =new mongoose.Schema({
    content:{
        type:String
    },
    title:{
        type:String
    },
    channelName:{
        type:String
    }
})
// 创建集合
let CsvData = mongoose.model('CsvData',csvdataSchema)

module.exports = { CsvData } 
