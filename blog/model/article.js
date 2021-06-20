// 引入mongoose模块
// 创建用户的集合模块
// 创建用户集合规则
// 创建集合
const Joi = require('joi')
// const string = require('joi/lib/types/string')
const mongoose =require('mongoose')

const acticleSchema =new mongoose.Schema({
    title:{
        type:String,
        required: [true,'请输入文章的标题'],
        minlength:5,
        maxlength:30
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'请传递作者']
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String
    }
})

const Article = mongoose.model('Article',acticleSchema)
// 对用户提交的信息进行验证分析，使用第三方模块joi
const validate = (user)=>{
    const Schema = {
        title: Joi.string().min(2).max(40).required().error(new Error('文章标题的格式错误，请输入字符长度为2-20的标题')),
        author: Joi.string(),
        publishDate: Joi.date(),
        cover: Joi.string(),
        content: Joi.string().required().error(new Error('请填写文章内容'))
    }
    return Joi.validate(user,Schema)
}
// 将文章的数据集合抛出
module.exports = {
    Article,validate
}