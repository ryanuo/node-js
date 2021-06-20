const mongoose = require('mongoose')
// 导入验证规则模块
const Joi = require('joi')
const crypto = require('crypto')
// 对密码进行哈希加密
// const bcrypt = require('bcrypt')
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20,
        unique:true
    },
    email:{
        type:String,
        // 保证邮箱地址不重复
        unique:true,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    state:{
        type:Number,
        default:0
    }
})
// 创建集合
const User = mongoose.model('User',userSchema);

// 使用md5加密
const md5Crypto=(str)=>{
    const hash=crypto.createHash('md5');
    hash.update(str);
    //加密后是二进制的，不好看，转换成16进制，并且字母大写
    return hash.digest("hex").toUpperCase();
}
// 设定一个字符加入md5加密中
let mdsecret = 'MaX_daw'

// 对用户提交的信息进行验证
const validate = (user)=>{
    const schema = {
        username: Joi.string().min(2).max(10).required().error(new Error('输入的用户名有误，验证无法通过')),
        // email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        email: Joi.string().regex(/^[a-zA-Z0-9]{2,20}@[a-zA-Z0-9]{2,8}.com$/).required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式有误')),
        role: Joi.string().valid('normal','admin').required().error(new Error('角色信息不符合')),
        state: Joi.number().valid(0,1).required().error(new Error('状态码非法'))
    }
    return Joi.validate(user,schema)
}
// 建用户集合作为模块成员进行导出，开放对象
module.exports = {
    User,md5Crypto,mdsecret,validate
}