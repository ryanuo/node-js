const csv = require('csvtojson')
const mongoose = require('mongoose')

let converter = csv()
    .fromFile('./allres.csv')
    .then((json) =>{
        json.forEach(async (item,index)=>{
            // console.log(item);
            await CsvData.create({
                content:item.content,
                title:item.title,
                channelName: item.channelName
            })
            // console.log(item.title);
            console.log(`正在创建第${index}个`);
        })
    })
// 创建集合规则
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
