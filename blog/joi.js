const Joi = require('joi')

const Schema = {
    username: Joi.string().min(2).max(10).error(new Error('username属性没有通过验证')),
    birth: Joi.number().min(1900).max(2021).error(new Error('birth属性没有通过验证'))
}

async function valwidate(){
    try{
        await Joi.validate({birth:1990,username:'a'},Schema)
    }catch(e){
        console.log(e.message);
        return;
    }
    console.log('验证通过');
} 
valwidate()
